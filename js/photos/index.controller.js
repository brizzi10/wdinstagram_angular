(function(){

  angular
  .module( "wdinstagram" )
  .controller( "EntryIndexController", [
    "EntryFactory",
    EntryIndexControllerFunction
  ]);

  function EntryIndexControllerFunction( EntryFactory ){
    this.gram = InstaFactory.query();
  }

}());
