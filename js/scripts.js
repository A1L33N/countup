var countUp = function(countTo, countBy) {
  var count = [];
  for(var i = countBy; i <= countTo; i += countBy) {
    count.push(i);
  };
  return count;
};

$(document).ready(function(){
  $('form#count-up').submit(function(event){
    var countTo = parseInt($('input#count_to').val());
    var countBy = parseInt($('input#count_by').val());
    if(countBy > countTo) {
      alert("You must count to a number higher than your count interval. Please check your inputs.")
    } else {
      var count = countUp(countTo, countBy);
      var countString = count.join(', ');

      $('#count-result').text(countString);
      event.preventDefault();
    };
  });
});
