describe("", function() {
  it("Declarada y asignada la variable numeroA", function() {
    assert.notEqual(numeroA, "undefined");
    assert.ok(typeof numeroA === "number");
  });
  it("Declarada y asignada la variable numeroB", function() {
    assert.notEqual(numeroB, "undefined");
    assert.ok(typeof numeroB == "number");
  });
  it("Declarada y asignada la variable resultadoSuma", function() {
    assert.notEqual(resultadoSuma, "undefined");
    assert.ok(typeof resultadoSuma == "number");
    assert.ok(resultadoSuma === (numeroA+numeroB));
  });
  it("Declarada y asignada la variable resultadoResta", function() {
    assert.notEqual(resultadoResta, "undefined");
    assert.ok(typeof resultadoResta == "number");
    assert.ok(resultadoResta === (numeroA-numeroB));
  });
  it("Declarada y asignada la variable resultadoMultiplicacion", function() {
    assert.notEqual(resultadoMultiplicacion, "undefined");
    assert.ok(typeof resultadoMultiplicacion == "number");
    assert.ok(resultadoMultiplicacion === (numeroA*numeroB));
  });
  it("Declarada y asignada la variable resultadoDivision", function() {
    assert.notEqual(resultadoDivision, "undefined");
    assert.ok(typeof resultadoDivision == "number");
    assert.ok(resultadoDivision === (numeroA/numeroB));
  });
})