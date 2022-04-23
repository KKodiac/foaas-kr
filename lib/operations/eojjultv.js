module.exports = {
    name: 'eojjultv',
    url: '/eojjultv/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/eojjultv/:from', function (req, res) {
        const message = '어쩔티비.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  