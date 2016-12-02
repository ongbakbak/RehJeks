angule.module('rehjeks.solve',[])
.controller('SolveController', function($scope, Solver){


  var getRandom = function(){
    Solver.getRandom();
  };


})