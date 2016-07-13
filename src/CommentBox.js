var i = 0;
var CommentBox = React.createClass({
    getInitialState: function() {
        return {
            data: {
                count: i
            }
        }
    },
    loadCommentsFromServer: function() {
        this.setState({data: {count: ++i}});
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
//        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div>
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
            </div>
            );
    }
});

var CommentList = React.createClass({
    render: function() {
//        var commentNodes = this.props.data.map(function(comment) {
//            return (
//                <Comment author={comment.author} key={comment.id}>
//          {comment.text}
//                </Comment>
//                );
//        });
        console.log(this.props);

        return (
            <div>
            <h1>I'm a comment list.</h1>
                {this.props.data.count}
            </div>
            );
    }
});

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
          {this.props.author}
                </h2>
        {this.props.children}
            </div>
            );
    }
});


ReactDOM.render(
    <CommentBox pollInterval={1000}/>,
    document.getElementById("example")
);