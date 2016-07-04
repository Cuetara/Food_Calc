function config($locationProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/main")         /*$: archovo de directiva de angular*/
  $stateProvider
  .state("main",{
    url:"/main",
    templateUrl: "views/main.html"
  })
}

angular
    .module('foodCalc')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;           /*rootScope: scope padre, lo que guardes aqui sera accesible para todos los controladores*/
    });
