(function (global, $) {
    // 'new' an object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // hidden within the scope of the IIFE and never
    // directly accessible
    var supportedLangs = ["en", "es"];

    // informal greeting
    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    // formal greeting
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    // message logger
    var logMessages = {
        en: "Logged in",
        es: "Inició Sesión"
    };

    // prototype holds methods
    Greetr.prototype = {
        // 'this' refers to the calling object at execution time
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        validate: function () {
            // check that language is valid
            // references the externallyt inaccesible 'supportedLangs' within
            // the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },

        // retrieve messages from object by referring to properties using []
        // syntax
        greeting: function () {
            return greetings[this.language] + " " + this.firstName + "!";
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + " " + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function (formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(
                    logMessages[this.language] + ": " + this.fullName()
                );
            }

            // make chainable
            return this;
        },

        setLang: function (lang) {
            // set language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw "jQuery not loaded";
            }

            if (!selector) {
                throw "Missing selector";
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chose place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }
    };

    // the actual object is created here, allowing us to 'new' an object without
    // calling 'new'
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

        self.validate();
    };

    // Since Greetr.init is the constructor all objects,
    // created with the Greetr.init constructor should point
    // to the Greetr.prototype hence the following:
    Greetr.init.prototype = Greetr.prototype;

    // Expose Greetr to global, and provide a shorthand 'G$'
    // for easing our poor fingers
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);
