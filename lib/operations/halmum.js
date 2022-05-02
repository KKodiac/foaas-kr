module.exports = {
    name: 'halmum',
    url: '/halmum/:company/:from',
    fields: [
        { name: 'Company', field: 'company' }, 
        { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/halmum/:company/:from', function (req, res) {
        const message = `야 ${req.params.company}아 욕이란건 말이다... 옘병 땀병에 갈아버릴 속병에 걸려가지고 땀통이 끊어지면은 끝나는 거고 이 시베리아 벌판에서 얼어죽을 년 같으니! 십장생 같은 년! 옘병 땀병에 그냥, 땀통 끊어지면은 그냥 죽는 거야, 이 년아. 이런 개나리를 봤나! 야, 이 십장생아! 귤 까라 그래! 이 시베리아야! 에라이 썅화차야! 이 시베리아 벌판에서 귤이나 까라!.`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  


