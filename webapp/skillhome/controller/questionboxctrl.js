angular.module('sm-skillprofile')
    .controller('questionboxCtrl', ['$window','$input', function(window,input) {
        var ctrl=this;
        ctrl.transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
        };
        ctrl.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

        ctrl.support = { transitions: Modernizr.csstransitions };
        ctrl.proto = {};

        ctrl.defaults = {
            // class name {
            active: 'show',
            ready: 'show-next',
            // selectors { =====
            question: 'step',
            next: 'next',
            // progress indicator
            progress: 'progress',
            // step counter + placeholders
            counter: 'num',
                index: 'current',
                total: 'total',
            // error message container
            error: 'span.error',
            // how to find the field inputs
            inputs: 'input, select, textarea',
            // callbacks { =====

            invalid: function (answer, $input) {
                // check the input value and return the failure message if invalid
        
           return answer === '' ? 'EMPTYSTR' : false;
            },
            onSubmit: ctrl.noop
        };

    ctrl.stepsForm=function(el, options) {
        ctrl.el = el;
        ctrl.options = $.extend({}, defaults, options);
        ctrl._init();
    }

    proto._init = function () {
        var o = ctrl.options, el = ctrl.el; // shorthand
        // current question
        ctrl.current = 0;

        // questions
        ctrl.questions = el.find(o.question);
        // total questions
        ctrl.questionsCount = ctrl.questions.length;
        // show first question
        this.questions.first().addClass(o.active);

        // next question control
        ctrl.ctrlNext = el.find(o.next);

        // progress bar
        ctrl.progress = el.find(o.progress);

        // index container -- so we can transition the current counter
        ctrl.questionStatus = el.find(o.counter);
        // current question placeholder
        ctrl.currentNum = ctrl.questionStatus.find(o.index);
        ctrl.currentNum.html(ctrl.current + 1);
        // total questions placeholder
        ctrl.totalQuestionNum = ctrl.questionStatus.find(o.total);
        tctrltotalQuestionNum.html(ctrl.questionsCount);

        // error message
        ctrl.error = el.find(o.error);

        // init events
        ctrl._initEvents();
    };

    ctrl.proto._initEvents=function() {
        var self = this,
            // first input
            firstElInput = ctrl.questions.eq(ctrl.current).find(ctrl.options.inputs);

        // show the next question control first time the input gets focused
        firstElInput.one('focus', function () {
            ctrl.ctrlNext.addClass(ctrl.options.active);
        });

        // show next question
        self.ctrlNext.on('click', function (ev) {
            ev.preventDefault();
            self._nextQuestion();
        });

        // hotkeys
        ctrl.el.on('keydown', function (ev) {
            switch(ev.keyCode || ev.which) {
                // pressing enter will jump to next question
                case 13:
                    ev.preventDefault();
                    ctrl._nextQuestion();
                    break;
                // disable tab
                case 9:
                    ev.preventDefault();
                    break;
            }
        });
    };

    proto._nextQuestion = function () {
        if (this.isFilled === true || !this._validade()) {
            return false;
        }

        var self = this;

        // check if form is filled
        if (self.current === self.questionsCount - 1) {
            self.isFilled = true;
        }

        // clear any previous error messages
        self._clearError();

        // update progress bar
        self._progress();

        // skip some ui changes if we're done
        if (!self.isFilled) {
            // question references (note incremented question index
            var currentQuestion = self.questions.eq(self.current),
                nextQuestion = self.questions.eq(++self.current);

            // change the current question number/status
            self._updateQuestionNumber();

            // add class "show-next" to form element (start animations)
            self.el.addClass(self.options.ready);

            // remove class "current" from current question and add it to the next one
            currentQuestion.removeClass(self.options.active);
            nextQuestion.addClass(self.options.active);
        }

        // after animation ends, remove class "show-next" from form element and change current question placeholder
        var onEndTransitionFn = function (ev) {
                if (support.transitions) {
                    $(this).off(transEndEventName, onEndTransitionFn);
                }
                if (self.isFilled) {
                    self._submit();
                }
                else {
                    self.el.removeClass(self.options.ready);
                    self.currentNum.html( self.nextQuestionNum.html() );
                    self.nextQuestionNum.remove();
                    // force the focus on the next input
                    nextQuestion.find(self.options.inputs).focus();
                }
            };

        if (support.transitions) {
            self.progress.on(transEndEventName, onEndTransitionFn);
        }
        else {
            onEndTransitionFn();
        }
    }

    // updates the progress bar by setting its width
    proto._progress = function () {
        this.progress.css('width', (this.current+1) * (100 / this.questionsCount) + '%');
    }

    // changes the current question number
    proto._updateQuestionNumber = function () {
        // first, create next question number placeholder
        this.nextQuestionNum = $('<span />', { className: this.options.nextnum }).text(this.current + 1);
        // insert it in the DOM
        this.questionStatus.append(this.nextQuestionNum);
    }

    // submits the form
    proto._submit = function () {
        this.options.onSubmit.call(this);
    }

    // TODO (next version..)
    // the validation function
    proto._validade = function () {
        // current question´s input
        var input = this.questions.eq(this.current).find(this.options.inputs);
        var invalid = this.options.invalid(input.val(), input);
        if (invalid) {
            this._showError(invalid);
            return false;
        }

        return true;
    }

    // TODO (next version..)
    proto._showError = function (message) {
        // some convenience placeholders
        switch (message) {
            case 'EMPTYSTR':
                message = 'Please fill the field before continuing';
                break;
            case 'INVALIDEMAIL':
                message = 'Please fill a valid email address';
                break;
        };
        this.error.addClass(this.options.active).html(message);
    }

    // clears/hides the current error message
    proto._clearError = function () {
        this.error.removeClass(this.options.active);
    }

    // bind prototype
    $.extend(stepsForm.prototype, proto);

    // expose
    $.fn.stepsForm = function(options) {
        this.each(function() {
            new stepsForm($(this), options);
        });
    }
  $.stepsFormDefaults = defaults; // so you can reuse default validation fns, etc



  var $container = $('#demo > .content'), field_template = $('#tpl-field').html();

// quick lodash
var each = function(args, cb) {
    for (var k in args) if (args.hasOwnProperty(k)) if( false === cb(args[k], k) ) return;
}
// quick Moustache
var Template = function (template, args) {
    each(args, function(replacement, placeholder) {
        template = template.replace(new RegExp('{{' + placeholder + '}}', 'gm'), replacement);
    });

    return template;
}

var questions = [
    'What is your favorite color?',
    'Who\'s your daddy?',
   'What do mice eat?',
    'Square root of PI?',
    'What\'s the <code>symlink</code> to your heart?'
];

each(questions, function(q, i) {
    $container.append(Template(field_template, { i: i, text: q }));
});

$('#demo').stepsForm({
   invalid: function(answer, $input) {
        // joke example
     if(answer.indexOf('cheese') >= 0) return 'You can\'t say that...';
           
     // reuse base
      return $.stepsFormDefaults.invalid(answer, $input);
   },
    onSubmit: function() {
        var data = this.el.serializeArray(), display = [];
        this.el.addClass('complete');
        if (window.console && console.log) console.log('Submitting Minimal Form Demo:', data);
        this.el.before('<strong>Thanks for playing the game!  Refresh to try again...</strong>');

        var ans_template = $('#tpl-answered').html();

        each(data, function (v) {
            display += Template(ans_template, { q: questions[parseInt(v.name.substring(1))], a: v.value });
        });
        this.el.after('<div style="margin-top:3em;"><em>You Said:</em>' + display + '</div>');
    }
});
}]);

