import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const v1 = readFileSync(join(ROOT, "versions/1.1/index.html"), "utf8");
const v2 = readFileSync(join(ROOT, "index.html"), "utf8");
const compare = readFileSync(join(ROOT, "compare.html"), "utf8");

class Node {
  constructor(tag) {
    this.tagName = tag; this.children = []; this.parentNode = null;
    this.attrs = {}; this.style = {}; this.value = ""; this.textContent = "";
    this.checked = false; this.classList = { add() {}, remove() {}, toggle() {} };
  }
  setAttribute(k,v) { this.attrs[k] = String(v); }
  getAttribute(k) { return this.attrs[k] ?? null; }
  appendChild(child) {
    if (child.parentNode) child.parentNode.removeChild(child);
    this.children.push(child); child.parentNode = this; return child;
  }
  removeChild(child) {
    const at = this.children.indexOf(child);
    if (at >= 0) { this.children.splice(at,1); child.parentNode = null; }
    return child;
  }
  append(...children) { children.forEach(c=>this.appendChild(c)); }
  replaceChildren(...children) {
    this.children.forEach(c=>c.parentNode=null); this.children=[];
    this.append(...children);
  }
  get firstChild() { return this.children[0] ?? null; }
  cloneNode(deep = false) {
    const copy = new Node(this.tagName);
    copy.attrs = { ...this.attrs }; copy.textContent = this.textContent;
    if(deep) this.children.forEach(child=>copy.appendChild(child.cloneNode(true)));
    return copy;
  }
}
const serialize = n => JSON.stringify({
  tag:n.tagName, attrs:n.attrs, children:n.children.map(child=>JSON.parse(serialize(child)))
});
function launch(html) {
  const ids = [...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);
  const elements = new Map(ids.map(id=>[id,new Node("div")]));
  elements.get("search").value = "";
  elements.get("filter").value = "all";
  elements.get("loop").checked = true;
  const doc = {
    getElementById(id) { assert.ok(elements.has(id), "Missing element "+id); return elements.get(id); },
    createElement: tag => new Node(tag),
    createElementNS: (_,tag) => new Node(tag),
    createDocumentFragment: () => new Node("#fragment"),
    body: { contains: () => true }
  };
  const window = {};
  const script = html.split("<script>")[1]?.split("</script>")[0];
  assert.ok(script, "Inline script available");
  const run = new Function("document","window","requestAnimationFrame","XMLSerializer","Blob","URL","Image","navigator",script +
    ";return {catalog:L,shapeSvg,points,ppoint,segmentColor,geometryState,geomRelation:typeof geomRelation==='function'?geomRelation:null}");
  return { ...run(doc,window,()=>{},class{},class{},class{},class{},{}),elements,window };
}
const oldApp = launch(v1);
const newApp = launch(v2);

test("The immutable 1.1 construction is identical in 2.0", () => {
  const segment = html => html.slice(html.indexOf("function constructionSvg("),
    html.indexOf("function shapeSvg(")).trim();
  const v2OldBlock = v2.slice(v2.indexOf("function constructionSvg("),
    v2.indexOf("// Sacred geometry is derived")).trim();
  assert.equal(v2OldBlock,segment(v1));
});

test("All 46 original recipes and SVGs survive identically when sacred accent is zero", () => {
  assert.equal(oldApp.catalog.length,46);
  assert.deepEqual(newApp.catalog.map(x=>x.id),oldApp.catalog.map(x=>x.id));
  newApp.geometryState.sacred = 0;
  oldApp.catalog.forEach((recipe,i)=>{
    assert.equal(serialize(newApp.shapeSvg(newApp.catalog[i],false,0,1,false)),
      serialize(oldApp.shapeSvg(recipe,false,0,1,false)),recipe.id);
  });
});

test("Derived geometry is finite and opt-in for every glyph", () => {
  newApp.geometryState.sacred = .22;
  oldApp.catalog.forEach((recipe,i)=>{
    const candidate = newApp.catalog[i],metrics=newApp.geomRelation(candidate);
    assert.ok(metrics.shapes.every(s=>s.center.every(Number.isFinite) && Number.isFinite(s.radius)),recipe.id);
    assert.ok(metrics.relations.every(r=>r.intersections.every(pt=>pt.every(Number.isFinite))),recipe.id);
    assert.notEqual(serialize(newApp.shapeSvg(candidate,false,0,1,false)),
      serialize(oldApp.shapeSvg(recipe,false,0,1,false)),recipe.id);
  });
});

test("Version 2 is the default; top-level version titles link to 1.1 and 2",()=>{
  assert.match(v2,/href="\.\/v1\.html"/);
  assert.match(v2,/href="\.\/index\.html" aria-current="page"/);
  assert.match(compare,/class="versionTitles"/);
  assert.match(readFileSync(join(ROOT,"v1.html"),"utf8"),/versions\/1\.1\/index\.html/);
});
