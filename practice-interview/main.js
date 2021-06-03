/* Problem Statement
Define a function named getRangeReport with two parameters, start and end.
The function should return an object containing several properties holding
information about the numbers between start and end.

You can assume the following things about your parameters:

start and end are guaranteed to be integers
start is guaranteed to be less than or equal to end

The returned object should have the following properties:

total - the sum of all integers from start to end.
odds - an array containing all of the odd integers from start to end.
evens - an array containing all of the even integers from start to end.
range - an array containing all integers from start to end.
average - the average of all integers from start to end. */

function getRangeReport(start, end) {
  var report = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0
  };
  for (var i = start; i <= end; i++) {
    report.range.push(i);
    if (i % 2 !== 0) {
      report.odds.push(i);
    } else {
      report.evens.push(i);
    }
    if (start === end) {
      report.range.push(i);
      report.total = start + end;
      report.average = (start + end) / 2;
      if (start % 2 === 0) {
        report.evens.push(i);
      } else {
        report.odds.push(i);
      }
    } else {
      report.total += i;
      report.average = report.total / (end - start + 1);
    }
  }
  return report;
}
