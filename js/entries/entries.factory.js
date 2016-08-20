"use strict";

(function(){
  angular
  .module( "wdinstagram" )
  .factory( "EntriesFactory", [
    "$resource",
    EntriesFactoryFunction
  ]);

  function EntriesFactoryFunction( $resource ){
    return $resource( "http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT" }
    });
  }
}());
