describe("", function() {
  it("Declarada y asignada la variable nombre", function() {
    assert.notEqual(nombre, "undefined");
    assert.ok(typeof nombre === "string");
  });
  it("Declarada y asignada la variable apellido", function() {
    assert.notEqual(apellido, "undefined");
    assert.ok(typeof apellido == "string");
  });
  it("Declarada y asignada la variable resultado", function() {
    assert.notEqual(resultado, "undefined");
    assert.ok(typeof resultado == "string");
    assert.ok(resultado === "En dos años " + nombre + " " + apellido + " tendrá " + (edad + 2) + " años")
  });
})