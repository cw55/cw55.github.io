

angular.module("myApp", []).controller("siginUpController", function ($scope) {
    $scope.userdata = {};
    $scope.submitForm = function () {
        console.log($scope.userdata);
        var data = $scope.userdata;
        if(typeof(data.username)!="undefined"&&typeof(data.password)!="undefined"&&typeof(data.password2)!="undefined"){
            alert("注册成功！")
        }else{
            alert("注册失败！请填写完整信息")
        }
        
    };
}).directive('caowei', function () {
    var pass = {};
    pass.strict = 'AE';
    pass.scope = { orgText: '=caowei' };
    pass.require = 'ngModel';
    pass.link = function (scope, element, attr, control) {
        control.$validators.caowei = function (value) {
            return value == scope.orgText;
        }
        scope.$watch('orgText', function () {
            control.$validate();
        });
    }
    return pass;
})