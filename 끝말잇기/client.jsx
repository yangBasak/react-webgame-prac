const React = require('react')
const ReactDom = require('react-dom')

const WordChainGame = require('./wordChainGame')
ReactDom.render(<WordChainGame />, document.querySelector('#root'))