module.exports = { 'echo_component' : {
  schema: {
    event: { type: 'string' },
    echo: { type: 'string' },
    delay: { type: 'number', default: 0 },
    subject: { type: 'selector', default: null },
  },

  multiple: true,

  init: function() {
    this.echoCallback = () => this.echo();
  },

  update: function(prevdata) {
    if (prevdata && prevdata.event) this.el.removeEventListener(this.data.event, this.echoCallback);
    this.el.addEventListener(this.data.event, this.echoCallback);
  },

  echo: function() {
    // if (this.echoTimeout) clearTimeout(this.echoTimeout);

    if (this.data.delay > 0.0) {
      setTimeout(() => this.emit(), this.data.delay); // schedule delayed execution
      return;
    }

    this.emit(); // now
  },

  emit: function() {
    (this.data.subject || this.el).emit(this.data.echo);
  }
} };
