import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ProjectItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, user_id, name, date} = this.props;
        console.log(this.props)
        return(
        <Link to={`/swiper/${id}`} className='proj-holder-link'>
            <div className="proj-holder">
                <div className="name">
                    {name}
                </div>
                <div className="date">
                    {date}
                </div>
            </div> 
        </Link>
        )
    }
}
export default ProjectItem;