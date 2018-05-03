import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Swiper from './components/Swiper';



class App extends Component {
    render() {
      return (
        <div className="App">
          <Route exact path='/' component={Swiper} />
        </div>
      );
    }
  }


function mapStateToProps(state){
  return state;
}

export default withRouter( connect( mapStateToProps ) (App) );
