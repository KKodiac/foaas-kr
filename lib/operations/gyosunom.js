module.exports = {
    name: 'Gyosunom',
    url: '/gyosunom/:class/:from',
    fields: [
      { name: 'Class', field: 'class' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/gyosunom/:class/:from', function (req, res) {
        const message = `아 ${req.params.class} 교수님 시험 기간에 별도 과제까지는 좀 아니잖아요... 씨발.`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  