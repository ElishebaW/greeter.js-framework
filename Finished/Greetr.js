(function(global, $) {
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IIFE and never directly accessibles
    var supportedLangs = ['en', 'es', 'fn'];

    // the language specific ways to greet the user
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        fn: 'Salut'
    };

    // the language specific ways to greet the user
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fn: 'Bonjour'
    };
    // messages to logged in the console
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión',
        fn: 'Connecte'
    };

    // container for methods to save memory
    Greetr.prototype = {
      //the calling object at runtime
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

       //check to make sure it is a valid language using the supportedLangs varible within the closure
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
             }
        },

        // returns the greeting from object using the refrering to properties using the bracket syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        //chainable methods to return their own object
        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

           //determines the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            // inject the message in the chosen place on the dom
            $(selector).html(msg);

            return this;
        }

    };
    // actual object is created here which allows us not to use 'new' each time
    Greetr.init = function(firstName, lastName, language) {

       var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

      self.validate();
    }

   //trick borrowed from jquery so we don't have to use new
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
