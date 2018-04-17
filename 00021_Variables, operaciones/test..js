describe("", function() {
  it("Declarada y asignada la variable numeroA", function() {
    assert.notEqual(numeroA, "undefined");
    assert.ok(typeof numeroA === "number");
  });
  it("Declarada y asignada la variable numeroB", function() {
    assert.notEqual(numeroB, "undefined");
    assert.ok(typeof numeroB == "number");
  });
  it("Declarada y asignada la variable resultado", function() {
    assert.notEqual(resultado, "undefined");
    assert.ok(typeof resultado == "number");
  });
})