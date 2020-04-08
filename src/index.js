import Post from './Post'
import json from './assetc/json'
import webpackLogo from './assetc/webpack.png'
import './css/main.css'
const post = new Post('Уроки webpack', webpackLogo)
console.log('Post:', post.toString())
console.log('JSON:',json)