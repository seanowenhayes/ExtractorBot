function Settings ($scope) {

    $scope.settings = new Setting();
    $scope.extraction = new Extraction();
    $scope.level = new Level();

    function Setting () {
        this.startUrl = 'Hi There!!!';
        this.crawlLevels = [];
        this.extractions = [];
        this.addCrawlLevel = function () {
            this.crawlLevels.push($scope.level);
            $scope.level = new Level();
        };
        this.addExtraction = function () {
            this.extractions.push($scope.extraction);
            $scope.extraction = new Extraction();
        }
    }

    function Extraction () {
        this.type = '';
        this.name = '';
        this.cssExpression = '';
        this.defaultValue = '';
    }

    function Level () {
        this.path = '';
        this.cssExpresion = '';
    }
}

