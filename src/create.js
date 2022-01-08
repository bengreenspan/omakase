import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createFish } from './store';

class Create extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            error:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
async onSave(ev){
    ev.preventDefault();
    try{
   this.props.create(this.state.name)
    }
    catch(ex){
    this.setState({error: ex.response.data.error})
    }
}
onChange(ev){
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
    }
    render(){
        const { name, error } = this.state;
        const { onChange, onSave } = this;
        return(
            <form onSubmit={onSave}>
                {
                    !!error && JSON.stringify(error, null, 2)
                }
                <input name='name' value={ name } onChange= { onChange }/>
                <button>Order your own</button>
            </form>
        )
    }
}

export default connect(
    null,
    (dispatch, {history})=> {
        return{
            create: (name) => dispatch(createFish(name, history))
        }
    }
    
)(Create)