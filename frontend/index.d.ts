import '@emotion/react'
import { SetupServerApi } from 'msw/lib/types/node'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      green: string
      darkBlue: string
      almostWhite: string
      almostGrey: string
      yellow: string
      paleRed: string
    }
    modal: {
      width: number
    }
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      server: SetupServerApi
    }
  }
}
