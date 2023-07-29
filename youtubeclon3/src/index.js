import ReactDOM  from 'react-dom'
import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './_base.scss'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(

<BrowserRouter><App/></BrowserRouter>
,
document.getElementById("root"));
