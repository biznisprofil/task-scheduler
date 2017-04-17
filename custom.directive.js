(function () {

    var app = angular.module('directivesModule');

    app.directive('taskScheduler', function () {

        var controller = ['$scope', function ($scope) {

            function init() {
                $scope.items = angular.copy($scope.datasource);
            }

            init();

            $scope.addItem = function (name, description) {

                //Add task to directive scope
                $scope.items.push({
                    name: name,
                    description: description
                });

                // clean inputs after
                $scope.name = null;
                $scope.description = null;
            };

            // remove task
            $scope.removeItem = function (index) {
                $scope.items.splice(index, 1);
            };
        }],

            template = `
            <div class="mainContainer">
                <h3>Add New Task</h3>
                <label>Name:</label>
                <input type="text" placeholder="name" ng-model="name" ><br>
                <label>Description:</label>
                <input type="text" placeholder="description" ng-model="description" ><br>
                <button ng-click="addItem(name, description)">Add Item</button>
                <h3>All Tasks</h3>
                <ol>
                    <li ng-repeat="item in items track by $index">
                    <b>{{ item.name }}</b> <span class="removeButton" ng-click="removeItem($index)">X</span><br>
                    <i>{{ item.description }}</i>
                    </li>
                </ol>
            </div>
            `;

        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
                datasource: '='
            },
            controller: controller,
            template: template
        };
    });

}());