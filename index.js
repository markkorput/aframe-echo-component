module.exports = { 'echo_component' : {
  schema: {
    event: { type: 'string' },
    echo: { type: 'string', default: null },
    delay: { type: 'number', default: 0 },
    to: { type: 'selector', default: null },
  },

  multiple: true,

  init: function() {
    this.echoCallback = function(){ this.echo() }.bind(this);
  },

  update: function(prevdata) {
    if (prevdata && prevdata.event) this.el.removeEventListener(this.data.event, this.echoCallback);
    this.el.addEventListener(this.data.event, this.echoCallback);
  },

  echo: function() {
    // if (this.echoTimeout) clearTimeout(this.echoTimeout);

    if (this.data.delay > 0.0) {
      setTimeout(function(){ this.emit() }.bind(this), this.data.delay); // schedule delayed execution
      return;
    }

    this.emit(); // now
  },

  emit: function() {
    (this.data.to || this.el).emit(this.data.echo || this.data.event);
  }
} };
