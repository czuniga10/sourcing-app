import React, {Component} from 'react';
import style from './Swiper.css';

import 

class Swiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            yup: false,
            nope: false
        }

    this.handleYupClick = this.handleYupClick.bind(this);
    this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {

    }



    handleYupClick(){

    }

    handleNopeClick(){

    }
    render() {
        return(
            <div className="card-wrapper">
                <div className="card-holder">
                    <div className="text">
                    hello world
                    </div>
                </div>


                <div className="button-holder">
                    <div className="nope-button">
                    nope
                    </div>
                    <div className="yup-button">
                    yup
                    </div>
                </div>
            </div>


        
        )
    }
}
export default Swiper;