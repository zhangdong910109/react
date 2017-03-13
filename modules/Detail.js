var React = require('react');

var Detail = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},

	getInitialState:function(){
		return {
			list:[],
			formValue:'',
			comment:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				list: res.subjects
			})
		})
		$.ajax({url:'http://localhost:3001/user'}).then(function(res){
			_this.setState({
				comment: res
			})
		})
	},
	handlerTextarea:function(e){
		this.setState({
			formValue:e.target.value
		})
	},
	handlerSubmit:function(e){
		e.preventDefault();
		var text = this.state.formValue;
		var ID = this.props.params.id;
		console.log(text);
		$.ajax({
			type:'POST',
			dataType:'json',
			url:'http://localhost:3001/user',
			data:{
				title:ID,
				name:text
			}
		}).then(function(res){
			window.location.reload()
		})
	},
	render:function(){
		console.log(this.state.comment);
		if(this.state.list.length > 0){
			var lst = [];
			var comment = [];
			var comments = this.state.comment;
			var len = comments.length;
			var data = this.state.list;
			var length = data.length;
			for(var i = 0;i < length;i++){
				if(this.props.params.id == data[i].id){
					if(len > 0){
				    	for(var j = 0;j < len; j++){
					    	if(comments[j].title == this.props.params.id ){
								var commentHtml = <div key={j}>
													
						          					<h4>{comments[j].name}</h4>
						          					<hr/>
						        					
						        				</div>
						        comment.push(commentHtml);
						    }
				    	}
				    }
					var html = 	<div key={i}>
									<h2>{data[i].title}</h2>
					      			<div className="row">
					        			<img 
					        			src={data[i].images.large}  
					        			alt="Generic placeholder image"/>
					        			<div className="text">
					        				<p>导演：{data[i].directors[0].name}</p>
					        				<p>主演：{data[i].casts[0].name}、{data[i].casts[1].name}、{data[i].casts[2].name}</p>
						        			<p>上映时间：{data[i].year}</p>
						        			<p>评分：{data[i].rating.average}分</p>
						        		</div>
					      			</div>
					      			<p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					      			<p className="navbar-right"><a className="btn btn-lg btn-success" href="#" role="button">微博</a><a className="btn btn-lg btn-success" href="#" role="button">微信</a><a className="btn btn-lg btn-success" href="#" role="button">QQ</a><a className="btn btn-lg btn-success" href="#" role="button">贴吧</a></p>
					      			<hr className="featurette-divider"/>
					      			<form onSubmit={this.handlerSubmit} method="post" id="frmDemo">
								        <div className="col-lg-12">
								            <textarea name="content" defaultValue="请输入内容..." onChange={this.handlerTextarea} cols="160" rows="10" id="content"></textarea>
								            <input type="submit" className="btn btn-lg btn-success navbar-right" name="submit" value="发表评论"/>
								        </div>
								    </form>
					      		</div>
					lst.push(html);
					break;
				}
			}
		}
		return(
			<div>
				<div className="jumbotron container">
					{lst}
					{comment}
				</div>
			</div>
		)
	}
});

module.exports = Detail;