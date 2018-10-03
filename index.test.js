it("should pass when using jest-extended matchers chained with jest core matchers", () => {
    expect(1)
      .not.toBe(2)
      .toBePositive()
      .not.toBeNegative()
      .toBe(1);
});

