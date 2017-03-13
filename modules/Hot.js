var React = require('react');
var NavLink = require('./NavLink');

var Hot = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[],
			pageStart:0//分页开始位置初始化
		}
	},
	handlerLink:function(e){//分页按钮触发
		e.preventDefault();
		this.setState({
			pageStart:(e.target.value -1)*20
		});
		// window.location.reload();
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
		var start = this.state.pageStart;
		var pageSize = 20;
		var lst = [];
		var data = this.state.list;
		var listLen = data.length;
		var end = (start+pageSize)>listLen?listLen:(start+pageSize);
		if(listLen > 0){			
			for(var i = start;i<end;i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div className="col-lg-3 text-center" key={i}>
			          <img
			          src={data[i].images.large} 
			          alt="Generic placeholder image" width="200" height="300"/>
			          <h2>{data[i].title}</h2>
			          <p>{data[i].summary}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	电影详情 &raquo;</NavLink></p>
			        </div>
				)
			}
		}
		if(listLen > pageSize){//创建分页按钮
			var pageBox = [];
			var pageNum = Math.ceil(listLen/pageSize);
			for(var i = 1;i <= pageNum;i++){
				pageBox.push(
					<input type="submit" onClick={this.handlerLink} value={i} className="pageNo" key={i}/>
				)
			}
		}
		console.log(this.state.pageStart);
		return (
			<div className="container marketing">
		      <div className="row">
			    <div className="page-header">
		          <h1>正在热播</h1><a href="/list" className="navbar-right">More</a>
		        </div>
		        <div className="list1">
		        	{lst}
		        </div>
		        <div className="pageBox">
		        	{pageBox}
		        	共{pageNum}页
		        </div>
		      </div>
		      
			</div>
		)
	}
});

module.exports =Hot;