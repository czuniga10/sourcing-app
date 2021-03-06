import React, {Component} from 'react';
import './Swiper.css';
import { getReadyCards } from '../../services/profiles.services';
import SwiperItem from './SwiperItem/SwiperItem';

class Swiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            yup: false,
            nope: false
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        let id = this.props.match.params.id;
        getReadyCards(id)
        .then( res => {
            console.log(res.data);
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ profile: res.data });
                
            }
        })
    }



    handleYupClick(){

    }

    handleNopeClick(){

    }
    render() {
        // const profiles = this.state.profiles;
        // const displayCardItems = profiles.map( profile => {
        //     const index = profiles.indexOf(profile);
        //     return(
        //         <CardFiller key={index} profile={profile}/>
        //     )
        // })
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