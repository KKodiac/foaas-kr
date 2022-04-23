// TODO: This file was created by bulk-decaffeinate 
// AND Modified by janithcooray.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/eojjultv')

describe('/eojjultv', function () {
  it('정확한 이름으로 호출해야 됩니당. 다시 확인해주세용.', () => expect(operation.name).toEqual('어쩔티비.'))

  it('정확한 URL 로 호출해야 됩니당. 다시 확인해주세용.', () => expect(operation.url).toEqual('/eojjultv/:from'))

  it('정확한 필드 값으로 호출해야 됩니당. 다시 확인해주세용.', () =>
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('정확한 URL 로 app.get 을 호출해야 됩니당.', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/eojjultv/:from', jasmine.any(Function))
    })

    return it('정확한 인자로 결과를 호출해야 합니당.', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          from: 'TESTFROM'
        }
      }

      const message = `어쩔티비.`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
