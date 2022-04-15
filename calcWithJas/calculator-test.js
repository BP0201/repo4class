
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 6, rate: 5.4};
  expect(calculateMonthlyPayment(values)).toEqual(162.91);
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10000, years: 4, rate: 3.2};
  expect(calculateMonthlyPayment(values)).toEqual(222.23);
});

