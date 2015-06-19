userApp.controller("UsersCtrl", ['$scope', 'userservice', function ($scope, userservice) {
    //userservice.getUsers($scope);

    function loadData(filter) {
        return $.ajax({
            type: "POST",
            url: "/api/user/all",
            data: filter,
            dataType: "json"
        });
    };

    function insertItem(item) {
        return $.ajax({
            type: "POST",
            url: "/items",
            data: item,
            dataType: "json"
        });
    };

    function updateItem(item) {
        return $.ajax({
            type: "PUT",
            url: "/items",
            data: item,
            dataType: "json"
        });
    };

    function deleteItem(item) {
        return $.ajax({
            type: "DELETE",
            url: "/items",
            data: item,
            dataType: "json"
        });
    };

    $scope.gridConfig = {
        controller: {
            loadData: loadData,
            insertItem: insertItem,
            updateItem: updateItem,
            deleteItem: deleteItem,
        },

        autoload: true,
        filtering: true,
        editing: false,
        sorting: true,
        paging: true,

        fields: [
            { name: "id", type: "text", width: 50 },
            { name: "firstname", type: "text", width: 50 },
            { name: "lastname", type: "text", width: 50 },
            { name: "address", type: "text" },
            { type: "control" },
            {
                type: "action",
                action: function (item, grid, e) {
                    alert(item.name);
                },
                width: 10
            }
        ]
    };

    $scope.test = function (me) {
        me.jsgrid.search();
    };


}]);

userApp.controller("NewUserCtrl", ['$scope', 'userservice', function ($scope, userservice) {

    //userservice.getUsers($scope);

    $scope.createNewUser = function () {
        var newuser = { 'firstname': $scope.firstname, 'lastname': $scope.lastname, 'address': $scope.address, 'email': $scope.email };
        // Call UserService to create a new user
        //
        userservice.createUser(newuser, $scope);

        // Push new user to existing table column
        //
        $scope.users.push(newuser);
        // Reset fields values
        //
        $scope.firstname = '';
        $scope.lastname = '';
        $scope.address = '';
        $scope.email = '';
    };
}]);

userApp.controller("UsersByIdCtrl", ['$scope', 'userservice', '$routeParams', function ($scope, userservice, $routeParams) {
    userservice.getUser($routeParams.userId, $scope);
}]);

userApp.factory('userservice', ['$resource', function ($resource) {
    return new User($resource);
}]);

function User(resource) {

    this.resource = resource;

    this.createUser = function(user, scope) {
        // 
        // Save Action Method
        //
        var User = resource('/users/new');
        User.save(user, function(response) {
            scope.message = response.message;
        });
    };

    this.getUser = function(id, scope) {
        //
        // GET Action Method
        //
        var User = resource('/users/:userId', { userId: '@userId' });
        User.get({ userId: id }, function(user) {
            scope.user = user;
        });
    };

    this.getUsers = function(scope) {
        //
        // Query Action Method
        //
        var Users = resource('/api/user/all');
        Users.query(function(users) {
            scope.users = users;
        });
    };
}
