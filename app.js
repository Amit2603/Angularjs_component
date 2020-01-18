angular.module('app',['ui.router'])
    .config(function( $stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/component2/component2.html');  

        $stateProvider
        .state('componentOne',{
            url: '/component2/',
            template:"<component-one></component-one>" ,
            templateUrl : "component1/component1.html"
            

})
            
            .state('componentTwo',{
                url: '/Jain',
                template:"<component-two></component-two>" ,
                templateUrl : "component2/component2.html"

                });
                
        });
