angular.module('likeetApp')
    .service('dataService', ['$http', function ($http) {

        var urlBase = 'http://localhost:5000/api';

        this.get_resource = function () {
            return $http.get(urlBase + '/resource');
        };

        //this.getCustomer = function (id) {
        //    return $http.get(urlBase + '/' + id);
        //};
        //
        //this.insertCustomer = function (cust) {
        //    return $http.post(urlBase, cust);
        //};
        //
        //this.updateCustomer = function (cust) {
        //    return $http.put(urlBase + '/' + cust.ID, cust)
        //};
        //
        //this.deleteCustomer = function (id) {
        //    return $http.delete(urlBase + '/' + id);
        //};
        //
        //this.getOrders = function (id) {
        //    return $http.get(urlBase + '/' + id + '/orders');
        //};
    }]);