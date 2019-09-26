//use this line to import the function, made possible by
//the export default line in the other file
import leapYear  from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 2000;
  const expectedOutput = true; 
  expect(leapYear(input)).toBe(expectedOutput);
});