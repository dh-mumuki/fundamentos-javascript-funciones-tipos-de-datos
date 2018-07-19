describe("", function() {
  it("Declarada y asignada la variable apellido", function() {
    assert.notEqual(apellido, "undefined");
    assert.ok(typeof apellido === "string");
  });
  it("Declarada y asignada la variable numeroDeMes", function() {
    assert.notEqual(numeroDeMes, "undefined");
    assert.ok(typeof numeroDeMes == "number");
  });
    it("Declarada y asignada la variable haceFrio", function() {
    assert.notEqual(haceFrio, "undefined");
    assert.ok(typeof haceFrio === "boolean");
  });
})