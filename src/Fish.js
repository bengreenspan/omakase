import React from "react";
import { connect } from 'react-redux';
import { deleteFish} from './store';
import { Link } from 'react-router-dom';

const Fish = ({fish, destroy}) => {
    if(!fish.id){
        return null;
    }
return (
        <div>
        Eat the {fish.name}?
        <button onClick={()=>destroy(fish)}>Eat</button>
        <Link to={`/fishes/${fish.id}/update`}>Update</Link>
        </div>
)
}

export default connect(
    (state, otherProps) => {
  const fish = state.fishes.find(fish => fish.id === otherProps.match.params.id*1) || {};
        return {
            fish
        };
    },
    (dispatch, {history})=> {
    return {
        destroy: (fish)=> dispatch(deleteFish(fish, history))
    }
    }
)(Fish);
