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
    //sc += 'arguments[' + i + '], ';
    }
  //sc = sc.replace(/,\s$/, '');
    eval('console.log(' + sc.join(', ') + ')');
  },
  on: function ()
  {
    this.enabled = true;
  },
  off: function ()
  {
    this.enabled = false;
  },
  enable: function ()
  {
    return this.on();
  },
  disable: function ()
  {
    return this.off();
  }
};
