import * as React from 'react'
import {
	Route,
	Link,
	Switch,
  } from 'react-router-dom'
import { Home } from './components/home'
import { Games } from './components/games/index'
import { MyAccount } from './components/my-account/index'

export const App = () =>
	<>
		<nav>
		<Link to="/">Home</Link> | 
		<Link to="/games">Games</Link> | 
		<Link to="/my-account">My Account</Link>
		</nav>

		<Switch>
            <Route exact path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route path="/my-account" component={MyAccount} />
		</Switch>
	</>
