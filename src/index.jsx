import React from 'react'
import ReactDOM from "react-dom"
import * as $ from 'jquery'
import Post from '@models/Post'
import Async from '@models/Async'
import json from './assetc/json'
import webpackLogo from './assetc/webpack'
import xml from './assetc/email.xml'
import csv from './assetc/TemplateImportOU.csv'
import './css/main.css'
import './css/main.sass'
const post = new Post('Уроки webpack', webpackLogo)
const async = Async

const App = () =>(
	<div className="container">
		<h1>Курс по webpack</h1>
		<div className="logo"/>
		<pre/>
		<div className="sassblock">Sass</div>
	</div>	
)
ReactDOM.render(<App />, document.getElementById("root"))



