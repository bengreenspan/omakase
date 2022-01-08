import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD = 'LOAD';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';

const fishesReducer = (state = [], action)=> {
  if(action.type === LOAD){
    state = action.fishes; 
  }
  if(action.type === CREATE){
    state = [...state, action.fish]; 
  }
  if(action.type === DELETE){
    state = state.filter(fish => fish.id !== action.fish.id)
  }
  if(action.type === UPDATE){
    state = state.map(fish => fish.id !== action.fish.id ? fish : action.fish);
  }
  return state;
};

const reducer = combineReducers({
  fishes : fishesReducer 
});


const _loadFishes = fishes=> ({ type: LOAD, fishes}); 

const loadFishes = ()=> {
  return async(dispatch)=> {
    const fishes = (await axios.get('/api/fishes')).data;
    dispatch(_loadFishes(fishes));
  };
};

const _createFish = fish=> ({ type: CREATE, fish}); 

const createFish = (name)=> {
  return async(dispatch)=> {
    const fish = (await axios.post('/api/fishes', { name})).data;
    dispatch(_createFish(fish));
  };
};

const _deleteFish = fish=> ({ type: DELETE, fish}); 

const deleteFish = (fish, history)=> {
  return async(dispatch)=> {
    await axios.delete(`/api/fishes/${fish.id}`);
    dispatch(_deleteFish(fish));
    history.push('/fish');
  };
};

const _updateFish = fish=> ({ type: UPDATE, fish}); 

const updateFish = (id, name, history)=> {
  return async(dispatch)=> {
    const fish = await axios.put(`/api/fishes/${id}`, { name }).data;
    dispatch(_updateFish(fish));
    history.push('/fish');
  };
};


const store = createStore(reducer, applyMiddleware(thunk));


export default store;
export { loadFishes, createFish, deleteFish, updateFish };