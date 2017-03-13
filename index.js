var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;


var App = require('./modules/App');
var Home = require('./modules/Home');
var Hot = require('./modules/Hot');
var Will = require('./modules/Will');
var Detail = require('./modules/Detail');
var Good = require('./modules/Good');
var Best = require('./modules/Best');
var New = require('./modules/New');
var Top = require('./modules/Top');

var Index = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/detail/:id" component={Detail} />
					<Route path="/hot" component={Hot} />
					<Route path="/will" component={Will} />
					<Route path="/top" component={Top} />
					<Route path="/good" component={Good} />
					<Route path="/best" component={Best} />
					<Route path="/new" component={New} />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<Index/>,document.getElementById('app'));