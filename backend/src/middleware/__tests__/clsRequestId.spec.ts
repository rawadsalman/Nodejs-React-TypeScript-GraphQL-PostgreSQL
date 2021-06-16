import clsRequestId from '../clsRequestId'

describe('clsRequestId middleware', () => {
  it('should be called and add a requestId', () => {
    const idGenSpy = jest.fn()
    const requestSpy = { get: jest.fn(), set: jest.fn() }
    const responseSpy = { set: jest.fn() }
    const namespaceSpy = { set: jest.fn(), run: jest.fn() }
    const mw = clsRequestId(namespaceSpy, idGenSpy)

    mw(requestSpy, responseSpy, {})
    expect(mw).toHaveLength(3)
    expect(namespaceSpy.run).toHaveBeenCalled()
    expect(idGenSpy).toHaveBeenCalled()
  })
})
