var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	render:function(){
		return (
			<div>
				<div className="navbar-wrapper">
			    	<div className="container navbar-fixed-top">
				        <nav className="navbar navbar-static-top ">
				          <div className="container">
				            <div className="navbar-header">
				              <button type="button" className="navbar-toggle collapsed btn-warning" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				                <span className="sr-only">Toggle navigation</span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				              </button>
				              <a className="navbar-brand" href="#"><img alt="Brand" src="public/img/logo.png"/></a>
				            </div>
				            <div id="navbar" className="navbar-collapse collapse">
				              <ul className="nav navbar-nav">
				                <li><IndexLink to="/">首页</IndexLink></li>
				                <li><NavLink to="/hot">正在热映</NavLink></li>
				                <li><NavLink to="/will">即将上映</NavLink></li>
				                <li><NavLink to="/top">Top250</NavLink></li>
				                <li><NavLink to="/good">口碑榜</NavLink></li>
				                <li><NavLink to="/best">北美票房榜</NavLink></li>
				                <li><NavLink to="/new">新片榜</NavLink></li>
				              </ul>
				              <form className="navbar-form navbar-left">
				                <div className="form-group">
				                  <input type="text" className="form-control" placeholder="Search"/>
				                </div>
				                <button type="submit" className="btn"><a href="#"><img src="public/img/search.png"/></a></button>
				              </form>
				              <ul className="nav navbar-nav navbar-right">
				                <li><a href="#">登录</a></li>
				                <li><a href="#">注册</a></li>
				              </ul>
				            </div>
				          </div>
				        </nav>
			    	</div>
			    </div>
			    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
			    	<ol className="carousel-indicators">
				        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				        <li data-target="#myCarousel" data-slide-to="1"></li>
				        <li data-target="#myCarousel" data-slide-to="2"></li>
			      	</ol>
			      	<div className="carousel-inner" role="listbox">
				        <div className="item active">
				          	<img className="first-slide" src="public/img/movie1.jpg" alt="First slide"/>
				          	<div className="container">
				            	<div className="carousel-caption">
				              		<h1>Example headline.</h1>
				             		<p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
				              		<p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
				            	</div>
				          	</div>
				        </div>
			        	<div className="item">
			          		<img className="second-slide" src="public/img/movie2.jpg" alt="Second slide"/>
			          		<div className="container">
			            		<div className="carousel-caption">
				              		<h1>Another example headline.</h1>
				              		<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				              		<p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
			            		</div>
			          		</div>
			        	</div>
			        	<div className="item">
				        	<img className="third-slide" src="public/img/movie3.jpg" alt="Third slide"/>
				        	<div className="container">
				            	<div className="carousel-caption">
						            <h1>One more for good measure.</h1>
						            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
						            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
				            	</div>
			        		</div>
			        	</div>
			      	</div>
			      	<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			        	<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			        	<span className="sr-only">Previous</span>
			      	</a>
			      	<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			        	<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			        	<span className="sr-only">Next</span>
			      	</a>
			    </div>
			    {this.props.children}
			    <footer>
			        <p className="pull-right"><a href="#">Back to top</a></p>
			        <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
			    </footer>
			</div>

		)
	}
});

module.exports = App;