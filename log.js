window.debug = {
  enabled: true,
  log: function ()
  {
    if (!this.enabled)
    {
      return;
    }
    var sc = [];
    for (var i = 0, num = Array.prototype.slice.call(arguments).length; i < num; i ++)
    {
      sc.push('arguments[' + i + ']');
    }
    eval('console.log(' + sc.join(', ') + ')');
  },
  enable: function ()
  {
    this.enabled = true;
  },
  disable: function ()
  {
    this.enabled = false;
  }
};
