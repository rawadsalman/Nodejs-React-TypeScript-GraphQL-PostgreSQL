import packageJSON from './../package.json'
/* istanbul ignore file */
const styleGreen = 'color:white; background:#28d79f'
const stylePink = 'color:white; background:#B14D9A'
const stylePurple = 'color:white; background:#2B3060'
const styleRed = 'color:white; background:#d36a6a'
const styleOrange = 'color:white; background:#f48042'
// const styleBlue = 'color:white; background:#28b4d7'

async function logVersions() {
  const VERSION = packageJSON.version || ''
  const commitHash = process.env.REACT_APP_COMMIT_HASH || ''

  /* tslint:disable:no-console */
  console.log(
    `%c 🐐 %c react-app %c SPACEGOATS %c v${VERSION} %c ${commitHash.substring(0, 7)} `,
    styleGreen,
    stylePink,
    stylePurple,
    styleOrange,
    styleRed
  )

  try {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/version`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
    })

    const json = await response.json()

    /* tslint:disable:no-console */
    console.log(
      `%c 🐐 %c    api    %c SPACEGOATS %c v${json.version} %c ${json.commitHash} `,
      styleGreen,
      stylePink,
      stylePurple,
      styleOrange,
      styleRed
    )
  } catch (e) {
    console.warn(e)
  }
}

export default logVersions
