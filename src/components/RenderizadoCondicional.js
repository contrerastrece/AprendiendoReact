import React, { Component} from 'react';
// creando components Longin y Logout
function Login() {
  return(
    <div>
      <h3>Login</h3>
    </div>
  )
}
function Logout() {
  return(
    <div>
      <h3>Logout</h3>
    </div>
  )
}
export default class RenderizadoComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      session:false,
    }
  }
  render(){
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session?<Login></Login>:<Logout></Logout>}        
      </div>
    )
  }
}