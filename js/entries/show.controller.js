"use strict";

(function(){

  angular
  .module( "wdinstagram" )
  .controller( "EntriesShowController", EntriesShowControllerFunction)

  EntriesShowControllerFunction.$inject = ["$stateParams", "$state", "EntriesFactory"]
  function EntriesShowControllerFunction($stateParams, $state, EntriesFactory) {
    var EntriesShowViewModel = this;
    EntriesShowViewModel.entry = EntriesFactory.get({id: $stateParams.id});

    EntriesShowViewModel.update = function() {
      EntriesShowViewModel.entry.$update({id: $stateParams.id});
    };

    EntriesShowViewModel.delete = function() {
      EntriesShowViewModel.entry.$delete({id: $stateParams.id}).then(function() {
        $state.go("entriesIndex", {}, {reload: true});
      });
    }
  }



}());
