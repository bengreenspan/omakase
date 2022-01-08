import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import faker from 'faker';
import {createFish} from './store';


const Nav = ({create, fishes, location: { pathname }  }) => {
    return (
      <nav>
<Link to='/' className={ pathname === '/' ? 'selected' : ''}>Home</Link>
<Link to='/fishes' className={ pathname === '/fishes' ? 'selected' : ''}>Menu ({fishes.length}) </Link> 

<Link to='/fishes/create' className={ pathname === '/fishes/create' ? 'selected' : ''}>Order </Link>
    <button onClick={()=> create(faker.animal.fish())}>Chefs Choice!</button>
</nav>
    );
}

export default connect(
    state => state,
    (dispatch)=> {
        return{
            create: (name) => {
                dispatch(createFish(name));
            }
        }
    }
)(Nav);

