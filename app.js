var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Volodymyr Fetsat",
            "websiteUrl": "https://vfetsat.github.io/sweet-dreams/index.html",
            "codeSourceUrl": "https://github.com/VFetsat/sweet-dreams",
            "cvUrl": "",
            "photo": "images/students/fetsat.jpg"
        },
        {
            "name": "Oleksandr Sirenko",
            "websiteUrl": "https://aleksandrsirenko.github.io/project/",
            "codeSourceUrl": "https://github.com/aleksandrsirenko/project.git",
            "cvUrl": "",
            "photo": "images/students/sirenko.jpg"
        },
        {
            "name": "Tetiana Fomicheva",
            "websiteUrl": "https://tetianafomicheva.github.io/polandviza/",
            "codeSourceUrl": "https://github.com/tetianafomicheva/polandviza",
            "cvUrl": "",
            "photo": "images/students/fomicheva.jpg"
        },
        {
            "name": "Serhiy Lozovyy",
            "websiteUrl": "https://angelolviv.github.io/pink-floyd/index.html",
            "codeSourceUrl": "https://github.com/angelolviv/pink-floyd",
            "cvUrl": "",
            "photo": "images/students/lozovyy.jpg"
        },
        {
            "name": "Oleksandr Fediuk",
            "websiteUrl": "https://sasha1607.github.io/LoftLviv/",
            "codeSourceUrl": "https://sasha1607.github.io/LoftLviv/",
            "cvUrl": "",
            "photo": "images/students/no-photo.gif"
        },
        {
            "name": "Andriy Veremchuk",
            "websiteUrl": "https://andrewveremchuk.github.io/project/",
            "codeSourceUrl": "https://github.com/andrewveremchuk/project",
            "cvUrl": "",
            "photo": "images/students/no-photo.gif"
        },
        {
            "name": "Anna-Anastasiia Pereymybida",
            "websiteUrl": "https://annaanastasiiy.github.io/flower/",
            "codeSourceUrl": "https://github.com/AnnaAnastasiiy/flower",
            "cvUrl": "",
            "photo": "images/students/pereymybida.jpg"
        },
        {
            "name": "Ostap Hetman",
            "websiteUrl": "https://ostaphetman.github.io/new-website-portfolio/index.html",
            "codeSourceUrl": "https://github.com/OstapHetman/new-website-portfolio",
            "cvUrl": "",
            "photo": "images/students/hetman.jpg"
        },
        {
            "name": "Andriy Petrushchak",
            "websiteUrl": "https://andy2577.github.io/home-project/",
            "codeSourceUrl": "https://github.com/andy2577/home-project",
            "cvUrl": "",
            "photo": "images/students/petrushchak.jpg"
        },
        {
            "name": "Anna Petronchak",
            "websiteUrl": "https://annapetronchak.github.io/cvproject-2/",
            "codeSourceUrl": "https://github.com/annapetronchak/cvproject-2",
            "cvUrl": "https://www.dropbox.com/s/85148ifg4ovima1/cv_annapetronchak.pdf?dl=0",
            "photo": "images/students/petronchak.jpg"
        },
        {
            "name": "Rostyslav Pavliv",
            "websiteUrl": "https://rpavliv.github.io/project1/",
            "codeSourceUrl": "https://github.com/rpavliv/project1",
            "cvUrl": "",
            "photo": "images/students/pavliv.jpg"
        },
        {
            "name": "Liubomyr Kokor",
            "websiteUrl": "https://ljubik.github.io/cil-project/",
            "codeSourceUrl": "https://github.com/ljubik/cil-project",
            "cvUrl": "php.cil.org.ua/Kokor_IT-html.doc",
            "photo": "images/students/kokor.jpg"
        },
        {
            "name": "Andrii Kozii",
            "websiteUrl": "https://k2111.github.io/k2/",
            "codeSourceUrl": "https://github.com/k2111/k2",
            "cvUrl": "",
            "photo": "images/students/kozii.jpg"
        },
        {
            "name": "Ivan Golyk",
            "websiteUrl": "https://simpleproject-ivanholyk91.c9users.io/index.html",
            "codeSourceUrl": "https://github.com/ivanholyk91/simpleproject",
            "cvUrl": "",
            "photo": "images/students/golyk.jpg"
        },
        {
            "name": "Roman Khoronzhak",
            "websiteUrl": "https://romanromchyk1.github.io/swiftshare/",
            "codeSourceUrl": "https://github.com/romanromchyk1/swiftshare",
            "cvUrl": "",
            "photo": "images/students/khoronzhak.jpg"
        },
        {
            "name": "Yevheniia Vostres",
            "websiteUrl": "https://vostres.github.io/personal/",
            "codeSourceUrl": "https://github.com/vostres/personal",
            "cvUrl": "https://github.com/vostres/eugenia-vostres",
            "photo": "images/students/vostres.jpg"
        },
        {
            "name": "Oleksandr Liubovetskyi",
            "websiteUrl": "https://goldfish-vipsanyok.c9users.io/index.html",
            "codeSourceUrl": "https://github.com/vipsanyok/-Gold-fish-/tree/gh-pages",
            "cvUrl": "",
            "photo": "images/students/liubovetskyi.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
