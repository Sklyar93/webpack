import Post from '@models/Post'
import json from './assetc/json'
import webpackLogo from './assetc/webpack'
import xml from './assetc/email.xml'
import csv from './assetc/TemplateImportOU.csv'
import './css/main.css'
const post = new Post('Уроки webpack', webpackLogo)
console.log('Post:', post.toString())
console.log('JSON:',json)
console.log('xml', xml)
console.log('csv', csv)