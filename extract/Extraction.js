function Extraction (name, cssSelector, value) {
    this.name = name;
    this.cssSelector = cssSelector;
    this.value = value;
}

Extraction.prototype.extract = function (window, $) {
    this.setValue($(this.cssSelector));
};

Extraction.prototype.setValue = function (value) {
    var self = this;
    if (value.length = 1) {
        this.value = value.text();
    } else if (value.length > 1) {
        self.value = [];
        value.each(function (i, el) {
            self.value.push($(el).text());
        });
    }
};

module.exports = Extraction;