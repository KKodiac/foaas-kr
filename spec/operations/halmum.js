// TODO: This file was created by bulk-decaffeinate 
// AND Modified by janithcooray.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/halmum')

describe('/halmum', function () {
  it('정확한 이름으로 호출해야 됩니당. 다시 확인해주세용.', () => expect(operation.name).toEqual('야, 대머리'))

  it('정확한 URL 로 호출해야 됩니당. 다시 확인해주세용.', () => expect(operation.url).toEqual('/halmum/:company/:from'))

  it('정확한 필드 값으로 호출해야 됩니당. 다시 확인해주세용.', () =>
    expect(operation.fields).toEqual([
      { name: 'Company', field: 'company' },
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('정확한 URL 로 app.get 을 호출해야 됩니당.', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/halmum/:company/:from', jasmine.any(Function))
    })

    return it('정확한 인자로 결과를 호출해야 합니당.', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          company: 'TESTCOMPANY',
          from: 'TESTFROM'
        }
      }

      const message = `야 ${req.params.company}아 욕이란건 말이다... 옘병 땀병에 갈아버릴 속병에 걸려가지고 땀통이 끊어지면은 끝나는 거고 이 시베리아 벌판에서 얼어죽을 년 같으니! 십장생 같은 년! 옘병 땀병에 그냥, 땀통 끊어지면은 그냥 죽는 거야, 이 년아. 이런 개나리를 봤나! 야, 이 십장생아! 귤 까라 그래! 이 시베리아야! 에라이 썅화차야! 이 시베리아 벌판에서 귤이나 까라!.`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
