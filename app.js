let app = angular.module('ybfCare', []);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://photos.google.com/**'
    ]);
});

const key = 'AIzaSyCBW-gKyVg0oT4PJmRBYRXfOK02btIDu4M';

app.controller('videosCtrl',  function($scope, $http) {
    $scope.albums = [];

    $http({
        url: 'https://photoslibrary.googleapis.com/v1/sharedAlbums',
        method: 'GET'
        
    }).then(function(response) {
        console.log(response);
        $scope.albums = response.data.items;

    }, function(error) {
        console.log(error);

    });
});

$("#pop").on("click", function() {
    $(this).modal();
 });