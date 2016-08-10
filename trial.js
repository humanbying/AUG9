// var TaskApp = React.createClass({
//   getInitialState: function(){
//     return {
//       items: [],
//       task: ''
//     }
//   },
//
//   deleteTask: function(e) {
//     var taskIndex = parseInt(e.target.value, 10);
//     this.setState(state => {
//       state.items.splice(taskIndex, 1);
//       return {items: state.items};
//     });
//   },
//   onChange: function(e) {
//     this.setState({ task: e.target.value });
//   },
//   addTask:function (e){
//     this.setState({
//       items: this.state.items.concat([this.state.task]),
//
//       task: ''
//     })
//
//     e.preventDefault();
//   },
//
//   render: function(){
//     return(
//       <div>
//       <h1 id = "tasks">My Tasks</h1>
//       <TaskList items={this.state.items} deleteTask={this.deleteTask} />
//
//       <form onSubmit={this.addTask}>
//       <input onChange={this.onChange} type="text" value={this.state.task}/>
//       <button> Add Task </button>
//       </form>
//       </div>
//     );
//   }
// });
//
// var TaskList = React.createClass({
//   deleteElement:function(){
//     console.log("remove");
//   },
//
//   render: function(){
//
//     var displayTask  = function(task, taskIndex){
//       console.log("NEW ADDED TASK"+task);
//
//       return <li>
//       {task}
//       <button onClick= {this.deleteElement}> Delete </button>
//       </li>;
//     };
//
//     return <ul>
//     {this.props.items.map((task, taskIndex) =>
//       <li key={taskIndex}>
//       {task}
//       <button onClick={this.props.deleteTask} value={taskIndex}> Delete </button>
//       </li>
//     )}
//     </ul>;
//   }
// });
//
//
// ReactDOM.render(<TaskApp />, document.getElementById('root'));


var MessageApp = React.createClass({
  render: function(){
    return (
      <div>
      The is my Message App
      <form>
        <input type="text"/>
        <button>Message</button>
      </form>
      </div>
    )
  }
});

ReactDOM.render(<MessageApp />, document.getElementById('root'));
