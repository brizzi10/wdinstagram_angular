"use strict";

(function(){

  angular
  .module( "wdinstagram" )
  .controller( "EntriesIndexController", [
    "EntriesFactory",
    EntriesIndexControllerFunction
  ]);

  function EntriesIndexControllerFunction( EntriesFactory ){
    this.entries = EntriesFactory.query();
  }

}());
