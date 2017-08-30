/**
 * @copyright Betanovo Ltd. 2017-present
 * @author caixiaoyun
 */
'use strict'

import './css/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './js/App'
import H5AndCss from './js/note/H5AndCss'
import Address from './js/Address'
import TaskList from './js/TaskList'
import Calendar from './js/Calendar'
import Emails from './js/Emails'
import Manage from './js/Manage'

class defaultPage extends React.Component {
	render () {
		return (
			<div>什么都没有什么都没有什么都没有</div>
		)
	}
}

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path="/" component={App}>
			<IndexRoute component={defaultPage} />
			<Route path="note/h5-and-css" component={H5AndCss} />
			<Route path="address" component={Address} />
			<Route path="taskList" component={TaskList} />
			<Route path="calendar" component={Calendar} />
			<Route path="emails" component={Emails} />
			<Route path="manage" component={Manage} />
		</Route>
	</Router>
, document.getElementById('app'))