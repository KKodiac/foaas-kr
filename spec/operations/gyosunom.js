// TODO: This file was created by bulk-decaffeinate 
// AND Modified by janithcooray.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/gyosunom')

describe('/gyosunom', function () {
  it('정확한 이름으로 호출해야 됩니당. 다시 확인해주세용.', () => expect(operation.name).toEqual('교수님 시험 기간에 별도 과제까지는 좀 아니잖아요.'))

  it('정확한 URL 로 호출해야 됩니당. 다시 확인해주세용.', () => expect(operation.url).toEqual('/gyosunom/:class/:from'))

  it('정확한 필드 값으로 호출해야 됩니당. 다시 확인해주세용.', () =>
    expect(operation.fields).toEqual([
      { name: 'Class', field: 'class'},
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('정확한 URL 로 app.get 을 호출해야 됩니당.', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/gyosunom/:class/:from', jasmine.any(Function))
    })

    return it('정확한 인자로 결과를 호출해야 합니당.', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          class: 'TESTCLASS',
          from: 'TESTFROM'
        }
      }

      const message = `아 ${req.params.class} 교수님 시험 기간에 별도 과제까지는 좀 아니잖아요... 씨발.`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
