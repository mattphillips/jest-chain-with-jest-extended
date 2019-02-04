it("should pass when using jest-extended matchers chained with jest core matchers", () => {
  const add = (a: number, b: number): number => a + b;
  expect(add(1, 0))
    .not.toBe(2)
    .toBePositive()
    .not.toBeNegative()
    .toBe(1);
});
