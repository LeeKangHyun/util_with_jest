import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyled = createGlobalStyle`
  ${reset}
  body {
    font-family: "Fira Code", "menlo", sans-serif;
    * {
      box-sizing: border-box;
    }
  }
`
