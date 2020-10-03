import React from 'react';
import TreeNode from './Tree';
import Detail from './Detail';
import Data from './treedata.json';
import './App.scss';

/* state variable */
type AppState = {
  projectId : string,
  status : number[]
}

/* This is the 1st or parent component of the project which defines the basic layout of application */
class App extends React.Component<{},AppState> {

  /* lifecycle method which will be executed before render method, used to update state before rendering */
  componentWillMount() {
    this.setState({ projectId: '' });
    let arr = new Array<number>();
    this.setState({ status: arr });
  }

  /* this function will be passed to child(TreeNode) to get input from it,
  as props cannot be passed directly from child to parent,
  this will get project id for which data needs to be displayed */
  updateState = (id: string) => {
    let projectId = id;
    this.setState({ projectId: projectId });
  }

  /* this function will be passed to child(TreeNode) to get input from it,
  as props cannot be passed directly from child to parent,
  this will get object id for which children data needs to be hide or unhide */
  handleHide = (id: number) => {
    let arr = new Array<number>();
    arr = this.state.status;
    if (arr.includes(id)){
      for( var i = 0; i < arr.length; i++){ 
        if ( arr[i] === id) {
          arr.splice(i, 1); 
        }
     }
    }
    else{
      arr.push(id)
    }
    this.setState({ status: arr });
  }

  render(){
  return (
    <>
    <nav className="navbar navbar-expand-sm Navbar fixed-top">
      <a href="http://localhost:3000/" data-toggle="tooltip" title="Refresh Data" className="btn Refresh" ><i className="fas fa-redo-alt"></i></a>
      <a href="http://localhost:3000/" className="btn btn-outline-danger btn-sm Home">Home</a>
      <a href="http://localhost:3000/" className="btn PageTitle">Project Data</a>
    </nav>
    <div className="row MainBlock">
    <div className="col-3 card Tree">
    <span className="TreeHead">Projects</span>
    <TreeNode data={Data} update={this.updateState} hide={this.handleHide} status={this.state.status}/>
    </div>
    <div className="col">
      <div className="card DetailBlock">
        <span className="DetailHead">Project Details</span>
        <Detail projectId={this.state.projectId}/>
        </div>
    </div>
    </div>
    </>
  )
  }
}

export default App;
