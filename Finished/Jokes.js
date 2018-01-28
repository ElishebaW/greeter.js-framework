(function(global,$) {

  //creating a new object
  var Jokes= function(language){
    return new Jokes.init(language)
  }

  //languages that are supported on the page
  var supportedLangs = ['en','es','fn'];

  //the welcomes to the generator
  var intros = {
      en: 'Welcome to the Joke Generator',
      es: 'Bienvenido a la Joke Generator',
      fn: 'Bienvenue a la Joke Generator'
  };

//instructions for how to use the generator
  var instructions = {
      en: 'Use the joke generator form below to create your joke!',
      es: '¡Usa el forma del generador de bromas crear tu broma!',
      fn: 'Utilisez le forme générateur de blagues créer votre blague'
  }

  var setups = {
    en: 'Setup',
    es: 'Preparar',
    fn: 'Instaurer'
  }

  var climaxs = {
    en: 'Climax',
    es: 'El punto culminante',
    fn: 'Le point culminant'
  }

  var punchlines = {
    en: 'Punchline',
    es: 'La frase clave',
    fn: 'Le trait final'
  }

  var setupInsertTexts = {
    en: 'Insert setup text...',
    es: 'Insertar texto configuración...',
    fn: 'Insérer le texte de configuration ...'
  }

  var climaxInsertTexts = {
    en: 'Insert climax text...',
    es: 'Insertar texto climax...',
    fn: 'Insertar texto climax...'
  }

  var punchlineInsertTexts = {
    en: 'Insert punchline text...',
    es: 'Insertar texto de frase clave...',
    fn: 'Insérer un texte trait final....'
  }

 Jokes.prototype = {
   validate: function() {
     if(supportedLangs.indexOf(this.language) === -1){
       throw "Invalid language";
     }
   },

   setLang: function(lang){
      this.language = lang;
      this.validate();
      return this;
   },

   //pulling in the text for the intros
  intro: function(){
  return intros[this.language];
  },

  //pulling in the text for the instructions

  instruction: function(){
    return instructions[this.language];
  },

  setup: function(){
    return setups[this.language];
  },

  climax: function(){
    return climaxs[this.language];
  },

  punchline: function(){
    return punchlines[this.language];
  },

  setupInsertText: function(){
    return setupInsertTexts[this.setupInsertTexts];
  },

  climaxInsertText: function(){
    return climaxInsertTexts[this.climaxInsertTexts];
  },

  punchlineInsertText: function(){
    return punchlineInsertTexts[this.punchlineInsertTexts];
  },

  HTMLIntro: function(selector, intro){
    if (!$) {
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery selector';
    }


  //determines the intros
  var jokeintros;
  if (intro) {
    jokeintros = this.intro()
  }

  $(selector).html(jokeintros);
  return this;

  },

 HTMLInstructions: function(selector, instruction){
   if (!$){
     throw 'jQuery not loaded'
   }

   if (!selector) {
     throw 'Missing jQuery Selector'
   }


 var jokeinstructions;
  if (instruction) {
    jokeinstructions = this.instruction()
  }

  $(selector).html(jokeinstructions);
    return this;
  },

  HTMLSetup: function(selector, setup){

    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var setupjoke;
    if (setup) {
      setupjoke =  this.setup()
    }

    $(selector).html(setupjoke);
    return this;
  },

  HTMLClimax: function(selector, climax){
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var climaxjoke;
     if (climax) {
       climaxjoke = this.climax()
     }

     $(selector).html(climaxjoke);
     return this;
  },

  HTMLPunchline: function(selector, punchline){
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var punchlinejoke;
    if (punchline){
      punchlinejoke = this.punchline()
    }

    $(selector).html(punchlinejoke);
    return this;
  },

  HTMLSetupInsertText: function(selector, setupinserttext) {
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var setupinserttext;
    if (setupinserttext){
      setupinserttext = this.setupInsertText();
    }

    $(selector).html(setupinserttext);
    return this;
  },

  HTMLClimaxInsertText: function(selector, climaxinserttext) {
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var climaxinserttext;
    if (climaxinserttext) {
      climaxinserttext = this.climaxInsertText();
    }

    $(selector).html(climaxinserttext);
    return this;
  },

  HTMLPunchlineInsertText: function(selector, punchlineinserttext) {
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var punchlineinserttext;
    if (punchlineinserttext) {
      punchlineinserttext = this.punchlineInsertText();
    }

    $(selector).html(punchlineinserttext);
    return this;
  }
};


Jokes.init = function(language) {
  var self = this;
  self.language = language || 'en';
  self.validate();
}

Jokes.init.prototype = Jokes.prototype;

global.Jokes = global.J$ = Jokes;

}(window,jQuery));
