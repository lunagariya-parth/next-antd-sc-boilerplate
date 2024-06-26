'use client'
import { createGlobalStyle } from 'styled-components'
import { themes } from './variables'

const GlobalStyle = createGlobalStyle`
${Object.entries(themes)
  .map(
    ([theme, values]) => `
:root[data-theme='${theme}'] {
${Object.entries(values)
  .map(
    ([color, value]) => `
  --${color}-rgb: ${value};
  --${color}: rgb(${value});`
  )
  .join('')}
}`
  )
  .join('')}
  
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  background-color: var(--neutral-0);
  color: var(--neutral-950);
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  font-style: italic;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

code,
kbd,
samp {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

hr {
  all: unset;
  display: block;
  height: 1px;
  width: 100%;
  background: currentColor;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.anticon {
  svg {
    width: inherit;
    height: inherit;
  }
}
.ant-layout-content{
  margin: 24px 16px 0;
  overflow: initial;
}
`

export default GlobalStyle
