(function (global, $) {
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {};

    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    };

    // Since Greetr.init is the constructor all objects,
    // created with the Greetr.init constructor should point
    // to the Greetr.prototype hence the following:
    Greetr.init.prototype = Greetr.prototype;

    // Expose Greetr to global
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);
