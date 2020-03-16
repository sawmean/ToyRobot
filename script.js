function CodeFunction() {

  var coordinatex = $('#x').val(); //this does get variable of x into a value.
  var coordinatey = $('#y').val(); //this does get variable of y into a value

  var result = "(" + coordinatex + "," + coordinatey + ")"; //Putting the variable of x and y into (x,y) format

  $('#results').val(result) //grabbing the variable by id and putting out the user results into the page.

  $("#section").append('<div>' + result + '</div>')//getting the results and prepending/appending the value into the page.

}
var toyrobot = {
  x: 0,
  y : 0,
  move : function(x,y) {
    this.x += x;
    this.y += y;
    alert ("Hello Users, I just moved to your locations");
  },
  report:function(){
    return this.x + " " + this.y;
  }
};

//console.log(toyrobot.report());
//toyrobot.move(7,8);
//console.log(toyrobot.report());
//toyrobot.move(8,8);
//console.log(toyrobot.report());
