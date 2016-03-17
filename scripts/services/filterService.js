angular.module('galvanizeFlowMonitor')
  .factory('FilterFactory',
  function($http) {
  return {
    getCampuses: function() {
      return $http.get('./api/v1/campuses/')
    },
    campusFilter: "",
    userFilter: "",
    titleFilter: ""
    }
  });