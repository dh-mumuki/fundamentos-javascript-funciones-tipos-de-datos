describe("", function() {
  it("Declarada y asignada la variable edad", function() {
    assert.notEqual(edad, "undefined");
    assert.ok(typeof edad === "number");
  });
  it("Declarada y asignada la variable peso", function() {
    assert.notEqual(peso, "undefined");
    assert.ok(typeof peso == "number");
  });
})