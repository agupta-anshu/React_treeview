console.clear ()

type AppState = {
  status : string[],
  data: any[]
}

let Root = class extends React.Component<{},AppState> {
  constructor () {
		super ()
  }
  
  componentWillMount() {
    let arr = new Array<string>();
    this.setState({ status: arr });
    this.setState({ data: [
  {
    "gm1": [
      {
        "manager1": [
          {
            "lead1": [
              { "name": "c",
                "type": "emp"
              },
              {
                "name": "d",
                "type": "emp"
              }
            ],
            "name": "b",
            "type": "lead"
          }
        ],
        "name": "a",
        "type": "manager"
      },
      {
        "lead2": [
          {
             "name": "e",
             "type":"emp"
          }
        ],
        "name": "f",
        "type":"lead"
      }
    ],
    "name": "g",
    "type":"gm"
  }  
]})
  }
  
  handleHide = (id: string) => {
    let arr = new Array<string>();
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
  
  render () {
    return (<TreeNode data={this.state.data} hide={this.handleHide} status={this.state.status}/>)
  }
}

type TreeNodeProps = {
  data: any[],
  hide : any,
  status: string[]
}

let TreeNode = class extends React.Component<TreeNodeProps, {}> {
  
  handleClick = (id: string) => {
    this.props.hide(id)
  }
  
  render () {
    return (<ul className="MainList">   
        {
          this.props.data.map((tuple: any) => {
            let iconClass: any
            let child: any
            for (const key in tuple) {
              if (key !== "name" && key !== "type") {
                const keyName = key;
              }
            }
            if (tuple[keyName]) {
              if(this.props.status.includes(keyName)){
                iconClass = <i className="fas fa-minus-circle"></i>
                child = <TreeNode data={tuple[keyName]} update={this.props.update} hide={this.props.hide} status={this.props.status}/>
              } else{
                iconClass = <i className="fas fa-plus-circle"></i>
                child = null
              }
              return (<li className="MainList" key={keyName}><span className="CursorType" onClick={()=>{this.handleClick(keyName)}}>
              {iconClass} {tuple.name + ' (' + tuple.type + ')'}</span>
              {child}
              </li>)   
            } else {
            return (<li className="MainList" key={tuple.name}><span className="NoCursorType">{tuple.name + ' (' + tuple.type + ')'}</span></li>)
          }
        })}
        </ul>)
  }
}

ReactDOM.render (<Root/>, document.getElementById ('root'))