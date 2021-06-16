// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { setupServer } from 'msw/node'
import client from './config/apollo'
require('trace-unhandled/register')
dayjs.extend(utc)

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }

global.server = setupServer()
beforeEach(() => client.cache.reset())
beforeAll(() => global.server.listen())
afterEach(() => global.server.resetHandlers())
afterAll(() => global.server.close())

window.analytics = { page: jest.fn(), track: jest.fn() }

jest.setTimeout(20000)
