var should = chai.should()
describe('Test fizzBuzz function', function () {
  it('should return Fizz if input number is divisible by 3', function () {
    let input = 6
    let result = fizzBuzz(input)
    let expected = 'Fizz'
    result.should.be.equal(expected)
  })
  it('should return Buzz if input number is divisible by 5', function () {
    let input = 10
    let result = fizzBuzz(input)
    let expected = 'Buzz'
    result.should.be.equal(expected)
  })
  it('should return FizzBuzz if input number is divisible by 3 and 5', function () {
    let input = 15
    let result = fizzBuzz(input)
    let expected = 'FizzBuzz'
    result.should.be.equal(expected)
  })
  it('should return input number if all above-mentioned criteria can not be met', function () {
    let input = 7
    let result = fizzBuzz(input)
    let expected = input
    result.should.be.equal(expected)
  })
})