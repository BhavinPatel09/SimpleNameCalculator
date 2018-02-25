(
  function(){
  'use strict'
  angular.module('nameCalculatorApp',[])

  .controller('nameCalculatorController', function($scope){
    $scope.name="";//model
    $scope.countName=0;//model

    $scope.displayNumeric=function(){  //MV
        var totalnamevalue=calculateTotal($scope.name);
        $scope.countName=totalnamevalue;
    };

    function calculateTotal(sname){
      var total=0;
      for(var i=0;i<sname.length;i++)
      {
          total=total+sname.charCodeAt(i);
      }
      return total;
    };

  });
})();
