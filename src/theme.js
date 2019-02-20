import { createGlobalStyle } from 'styled-components'
const xl = 1250
const desktop = 950
const tablet = 768
const phone = 414
const purple = '5239F0'
const fontFamily = 'halyard-display'

// Theme References
export default {
  primary: purple,
  // colors
  fontFamily: `${fontFamily}`,
  // screen sizes
  xl: xl,
  desktop: desktop,
  tablet: tablet,
  phone: phone
}

// Inject reset.css into main style sheet;
export const GlobalStyles = createGlobalStyle`
  @import url("https://use.typekit.net/vbe2sbp.css");

  body {
    box-sizing: 'border-box';
  }
`
