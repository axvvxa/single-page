/**
 * @copyright Betanovo Ltd. 2017-present
 * @author caixiaoyun
 */
'use strict'
import React from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="topBar">
					<Link className="siteTitle" to="/">这是标题标题标题</Link>
					<a href="javascript:;" className="signout">
						<Icon type="poweroff" />
					</a>
				</div>
				<div className="container">
					<div className="leftMenu">
						<Menu
							onClick={this.handleClick}
							style={{ width: 240 }}
							mode="inline"
							theme="dark"
						>
							<Menu.SubMenu key="notes" title={<span><Icon type="book" /><span>个人笔记/日志</span></span>}>
								<Menu.Item>
									<Link to="/note/h5-and-css">h5+css</Link>
								</Menu.Item>
								<Menu.Item>
									<span>es6</span>
								</Menu.Item>
								<Menu.Item>
									<span>nodeJS</span>
								</Menu.Item>
								<Menu.Item>
									<span>react</span>
								</Menu.Item>
								<Menu.Item>
									<span>vue</span>
								</Menu.Item>
							</Menu.SubMenu>
							<Menu.Item key="address">
								<Link to="/address">
									<Icon type="home" />
									<span>地址簿</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="tasks">
								<Link to="/taskList">
									<Icon type="schedule" />
									<span>任务列表</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="dates">
								<Link to="/calendar">
									<Icon type="pushpin" />
									<span>重要日历</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="email">
								<Link to="/Emails">
									<Icon type="mail" />
									<span>电子邮件</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="manage">
								<Link to="/manage">
									<Icon type="api" />
									<span>项目管理</span>
								</Link>
							</Menu.Item>
						</Menu>
					</div>
					<div className="rightContent">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
