var routes = {
  '/': {
    method: 'get',
    fn: function(req, res) {
        res.json({ foo: 'hello world' });
    }
  }
};

module.exports = routes;
