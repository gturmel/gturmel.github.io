portfolio.controller('PortfolioController', ['$scope', function($scope){

   this.tab = 2;

   this.setTab = function(number){
      this.tab = number;
      console.log(this.tab);
   };

   this.selected = function(checkTab){
      return this.tab === checkTab;
   }


}]); //end of portfolio controller
