import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './scss/prism.scss';

const shlStyle = {
  className: 'prism-box',
  language: 'javascript',
  customStyle: {
    margin: '36px 0',
    padding: '1em'
  },
  codeTagProps: {
    style: {}
  },
  lineNumberContainerStyle: {
    display: 'block',
    padding: '0 10px 0 10px',
    margin: '0 20px 0 0',
    float: 'left'
    // backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  showLineNumbers: true,
  style: prism
}

export default shlStyle
