var Todo = React.createClass({
    render: function() {
        return (
            <div>{this.props.item.name}</div>
        );
    }
});

var TodoList = React.createClass({
    render: function() {
        var todos = [];
        console.log('this.props', this.props); 

        this.props.items.map((item) => {
            todos.push(<Todo item={item} />);
        });

        return (
            <div>{todos}</div>
        );
    }
});

var TodoInput = React.createClass({
    handleKeyDown: function(e) {
        console.log('e:', e);
        let keyCode = e.keycode || e.which;
        if (this.refs.textInput.value === '') {
            return;
        } else if (keyCode == 13) {
            this.props.onUserInput(this.refs.textInput.value);
            this.refs.textInput.value = '';
        }

    },
    render: function() {
        return (
            <div>
                <h1 style={{color: "red"}}>Todos</h1>
                <div>
                    <input type="text" ref="textInput" onKeyDown={this.handleKeyDown}/>
                </div>
            </div>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            items: []
        }
    },
    componentDidMount: function() {
        this.setState(
            {
                items: [
                    {
                        name: "bobo"
                    },
                    {
                        name: "hhh"
                    }
                ]
            }
        );
    },
    onUserInput: function(value) {
        let items = this.state.items;
        items.push({name: value});
        this.setState(
            {
                items: items
            }
        );
    },
    render: function() {
        return (
            <div>
                <TodoInput onUserInput={this.onUserInput}/>
                <TodoList items={this.state.items}/>
            </div>
        );
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('example')
);
