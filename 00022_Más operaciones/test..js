describe("", function() {
  it("Declarada y asignada la variable nombre", function() {
    assert.notEqual(nombre, "undefined");
    assert.ok(typeof nombre === "string");
  });
  it("Declarada y asignada la variable apellido", function() {
    assert.notEqual(apellido, "undefined");
    assert.ok(typeof apellido == "string");
  });
  it("Declarada y asignada la variable nombreCompleto", function() {
    assert.notEqual(nombreCompleto, "undefined");
    assert.ok(typeof nombreCompleto == "string");
    assert.ok(nombreCompleto === nombre + " " + apellido)
  });
})