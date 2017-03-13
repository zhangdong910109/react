var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				list: res.subjects
			})
		})
	},
	render:function(){

		if(this.state.list.length>0){
			var lst1 = [];
			var lst2 = [];
			var lst3 = [];
			var lst4 = [];
			var lst5 = [];
			var lst6 = [];
			var data = this.state.list;
			var listLen = data.length;
			var a = 4;
			for(var i =0;i<listLen;i++){
				var detailUrl = "/detail/" + data[i].id;
				var html = <div className="col-lg-3 text-center" key={i}>
			          <img
			          src={data[i].images.large} 
			          alt="Generic placeholder image" width="200" height="300"/>
			          <h2>{data[i].title}</h2>
			          <p>{data[i].summary}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	电影详情 &raquo;</NavLink></p>
			        </div>
				if(i<a){
					lst1.push(html);
				}
				if(i >= a && i < a*2){
					lst2.push(html);
				}
				if(i >= a*2 && i < a*3){
					lst3.push(html);
				}
				if(i >= a*3 && i < a*4){
					lst4.push(html);
				}
				if(i >= a*4 && i < a*5){
					lst5.push(html);
				}
				if(i >= a*5 && i < a*6){
					lst6.push(html);
				}
			}
			
		}
		return (
			<div className="container marketing">
		      <div className="row">
			    <div className="page-header">
		          <h1>正在热映</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst1}
		        </div>
		        <div className="page-header">
		          <h1>即将上映</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst2}
		        </div>
		        <div className="page-header">
		          <h1>Top250</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst3}
		        </div>
		        <div className="page-header">
		          <h1>口碑榜</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst4}
		        </div>
		        <div className="page-header">
		          <h1>北美票房榜</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst5}
		        </div>
		        <div className="page-header">
		          <h1>新片榜</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst6}
		        </div>
		      </div>
			</div>
		)
	}
});

module.exports = Home;