import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const red            = '#D32F2F'
export const darkBlue       = '#1F243D'
export const greyBlue       = '#9AACB6'
export const lightGrey      = '#EFEFEF'
export const white          = '#ffffff'
export const black          = '#000000'

export const iNeedReadability = '#edf2ff'

// new from palette
export const primary1Color = '#1f243d'
export const primary2Color = '#484c68'
export const primary3Color = '#000000'

export const secondaryColor = '#180627'
export const secondaryLightColor = '#9AACB6'
export const secondaryDarkColor = '#180627'

// Palette
export const palette = {
 primary1Color: primary1Color,
 primary2Color: primary2Color,
 primary3Color: primary3Color,

 accent1Color: secondaryColor,
 textColor: lightGrey,
 alternateTextColor: greyBlue,

 canvasColor: secondaryDarkColor,
 borderColor: secondaryDarkColor,
}

export default getMuiTheme({ palette })
