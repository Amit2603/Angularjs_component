angular.module('app', ['ui.router', 'oc.lazyLoad'])
    .config(function( $stateProvider) {
console.log('hello');

        $stateProvider
        .state('component1',{
            url: '/component1',
            template:"<component-one></component-one>" 
            
            })
            
            .state('component2',{
                url: '/component2',
                template:"<component-two></component-two>" 
                
                });
        });
