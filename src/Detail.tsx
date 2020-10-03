import React from 'react';
import Project from './projects.json';

/* props variable */
type DetailProps = {
    projectId : string,
  }


/* This component will render the project details when called by parent component App */
class Detail extends React.Component<DetailProps,{}>  {

    render() {
        return (
            <div className="ProjectBlock float-center">
            {Project.map((project)=>{
              
                if (project.id === this.props.projectId){
                  let deliveryUnitElement: any
                  if (project.deliveryUnit === null) {
                    deliveryUnitElement = null
                  }
                  else{
                    deliveryUnitElement = (<tr>
                      <td className="table-primary">Delivery Unit</td>
                      <td className="table-light">{project.deliveryUnit}</td>
                    </tr>)
                  }
                    return(
                        <div key={project.id}> 
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="table-primary">Account</td>
                                <td className="table-light">{project.account}</td>
                              </tr>
                              <tr>
                                <td className="table-primary">Manager</td>
                                <td className="table-light">{project.manager}</td>
                              </tr>
                              <tr>
                                <td className="table-primary">Team Count</td>
                                <td className="table-light">{project.team}</td>
                              </tr>
                              <tr>
                                <td className="table-primary">Domain</td>
                                <td className="table-light">{project.domain}</td>
                              </tr>
                              <tr>
                                <td className="table-primary">Practice Unit</td>
                                <td className="table-light">{project.practiceUnit}</td>
                              </tr>
                              {deliveryUnitElement}                   
                            </tbody>
                          </table>
                        </div>
                    )    
                }
                return null
            })}
            </div>
        )
      }
}


export default Detail;