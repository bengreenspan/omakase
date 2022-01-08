import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { connect, Provider } from 'react-redux';
import store, { loadFishes} from './store';
import { Switch, HashRouter as RoutyRoute, Route, Link } from 'react-router-dom';
import fishes from './Fishes';
import Nav from './Nav';
import fish from './Fish';
import Create from './Create';


const Home = () => <h4>
    Welcome to Fullstack Sushi!
<p>
    Click on menu to see what we are serving today
    </p>
</h4>

class _App extends Component{
  componentDidMount(){
    this.props.bootstrap();
  }

  render(){
    return (
        <RoutyRoute>
      <div>
        <h1> Fulltummy Academy</h1> 
        <Route component={ Nav } />
        <Route component={ Home } path='/' exact />
        <Route component={ fishes } path='/fishes'exact />
        <Route component={ fish } path='/fishes/:id' exact />
        <Route component={ Create } path='/fishes/create' exact />
        {/* <Route component={ Update } path='/fishes/update' exact /> */}
      </div>
      </RoutyRoute>
    );
  }
}

const App = connect(
 ({ fishes }) => ({ fishes }),
  (dispatch)=> {
    return {
      bootstrap: ()=> 
        dispatch(loadFishes())
      }; 
    }
)(_App);


render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));