import React, {Component} from 'react';
import './Projects.css'
import { getAllProjects } from '../services/project.services';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        getAllProjects(1)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ projects: res.data });
                console.log(this.state.projects);
            }
        })
    }




    render() {
        
        return(
            <div className="proj-wrapper">
                <div className="proj-holder">
                    <div className="text">
                    Project Name:
                    </div>
                    <div className="date">
                    5/4/2018
                    </div>
                </div> 
                <div className="proj-holder">
                    <div className="name">
                    Project Name:
                    </div>
                    <div className="date">
                    5/4/2018
                    </div>
                </div> 
            </div>
            


        
        )
    }
}
export default Projects;