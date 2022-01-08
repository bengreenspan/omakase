// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { updateFish } from './store';

// class Update extends Component {
//     constructor(props){ //in order to update you need to pass in
//         super(props);
//         this.state = {
//             name: this.props.fish.id ? this.props.fish.name : '',
//             error:''
//         };
//         console.log(this.props.fish);
//         this.onChange = this.onChange.bind(this);
//         this.onSave = this.onSave.bind(this);
//     }
// componentDidUpdate(prevProps){
//     if(!prevProps.user.id && this.props.user.id){ //this is a "flag" to make sure something
//     this.setState({ name: this.props.fish.name});
//     }
// }

// async onSave(ev){
//     ev.preventDefault();
//     try{
//    await this.props.update(this.props.fish.id, this.state.name)
//     }
//     catch(ex){
//     this.setState({error: ex.response.data.error})
//     }
// }
// onChange(ev){
//     const change = {};
//     change[ev.target.name] = ev.target.value;
//     this.setState(change);
//     }
//     render(){
//         const { name, error } = this.state;
//         const { onChange, onSave } = this;
//         return(
//             <form onSubmit={onSave}>
//                 <pre>
//                 {
//                     !!error && JSON.stringify(error, null, 2)
//                 }
//                 </pre>
//                 <input name='name' value={ name } onChange= { onChange }/>
//                 <button>Order your own</button>
//             </form>
//         )
//     }
// }

// export default connect(
//     (state, otherProps) => {
//         const fish = state.fishes.find(fish => fish.id === otherProps.match.params.id*1) || {};
//               return {
//                   fish
//               };
//           },
//     (dispatch, {history})=> {
//         return{
//             update: (id, name) => dispatch(updateFish(name, history))
//         }
//     }
    
// )(Update)


