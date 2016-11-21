var app = angular.module('BasicApp', []);

app.controller('BasicController', function(){
  console.log('Basic controller is ready to go!');

  var self = this;

  self.greeting = "Hi There!!!";

  self.newThing = { show: true };

  self.printGreeting = function(){
    if(self.greeting == ""){
      console.log('You did not even give me a greeting!!');
    } else {
      console.log(self.greeting);
    }
  }

  self.cohort = {
    roomNumber: 1,
    name: "Sigma"
  }

  self.hucksFavoriteThings = [
    {
      name: "Chipotle",
      happinessPoints: 1000000,
      show: true
    },
    {
      name: "Friendship",
      happinessPoints: 17,
      show: true
    },
    {
      name: "Space Potatoes",
      happinessPoints: 2,
      show: false
    }
  ];

  self.createFavoriteThing = function(){
    // self.hucksFavoriteThings.push({name: self.newThing.name, happinessPoints: self.newThing.happinessPoints, show: true});
    self.hucksFavoriteThings.push(angular.copy(self.newThing));
  }

});
