describe("", function() {
  it("Declarada y asignada la variable numeroA", function() {
    assert.notEqual(numeroA, "undefined");
    assert.ok(typeof numeroA === "string");
  });
  it("Declarada y asignada la variable numeroB", function() {
    assert.notEqual(numeroB, "undefined");
    assert.ok(typeof numeroB == "string");
  });
})