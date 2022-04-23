module.exports = {
    name: 'daemuri',
    url: '/daemuri/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/daemuri/:from', function (req, res) {
        const message = '야, 대머리.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  