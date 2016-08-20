"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("entriesIndex", {
      url: "/entries",
      templateUrl: "js/entries/index.html",
      controller: "EntriesIndexController",
      controllerAs: "EntriesIndexViewModel"
    })
    .state("entryShow", {
      url: "/entries/:id",
      templateUrl: "js/entries/show.html",
      controller: "EntriesShowController",
      controllerAs: "EntriesShowViewModel"
    });
  }

})();
