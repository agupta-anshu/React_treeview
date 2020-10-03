import React from 'react';

/* props variable */
type TreeNodeProps = {
  data: any,
  update : any,
  hide : any,
  status: any
}

class TreeNode extends React.Component<TreeNodeProps, {}>  {

  /* This function will be used to pass prop from child(TreeNode)
  to parent(App) when project node will be clicked in TreeView */
  handleProject = (id: any) => {
    this.props.update(id)
  }

  handleClick = (id: any) => {
    this.props.hide(id)
  }

  render() {
    return (
        <ul className="MainList">
          
        {
          this.props.data.map((tuple: any) => {
            let iconClass: any
            let child: any
            if (tuple.children != null) {
              if(this.props.status.includes(tuple.id)){
                iconClass = <i className="fas fa-minus-circle"></i>
                child = <TreeNode data={tuple.children} update={this.props.update} hide={this.props.hide} status={this.props.status}/>
              }
              else{
                iconClass = <i className="fas fa-plus-circle"></i>
                child = null
              }
            return (<li className="MainList" key={tuple.id}><span className="TreeNode CursorType" onClick={()=>{this.handleClick(tuple.id)}}>{iconClass} {tuple.name}</span>
              {child}
              </li>)
          }
          else if(tuple.project != null){
          return (<li className="MainList" key={tuple.id}><span className="TreeNode CursorType" onClick={()=>{this.handleProject(tuple.project)}}><i className="fas fa-file"></i> {tuple.name}</span></li>)
            }
          else {
            return (<li className="MainList" key={tuple.id}><span className="TreeNode NoCursorType">{tuple.name}</span></li>)
          }
        })}
        </ul>
    )
  }
  
}

export default TreeNode;
