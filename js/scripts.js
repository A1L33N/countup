var countUp = function(countTo, countBy) {
  var count = [];
  for(var i = countBy; i <= countTo; i += countBy) {
    count.push(i);
  };
  return count;
};
