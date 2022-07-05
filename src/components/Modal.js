import React, { Component } from 'react'
export default class Modal extends Component {
  
state={
      name: "",
      id:'',
      status:'',
      gender:'',
      istoggle:false,
      className:'this.props.state.className'
}

submit=(e)=>{
  e.preventDefault();

  if (this.state.name !== "") {
    this.props.addDataToMock(this.state);
  }
 
}
save=()=>{
  if(this.props.state.index!==""){
    this.props.state.datas.map((item,i)=>{
      if(this.props.state.index===i+1){
          item.name=this.state.name;
          item.id=this.state.id;
          item.status=this.state.status;
          item.gender=this.state.gender;
      }
      this.props.togglePoppup();
    })
    
  }
}

changeName=(e)=>{
this.setState({
  name:e.target.value
})
}
changeEmail=(e)=>{
  this.setState({
    id:e.target.value
  })
}
statusChange=(e)=>{
  this.setState({
    status:e.target.value
  })
}
genderChange=(e)=>{
  this.setState({
    gender:e.target.value
  })
}

  render() {
    return (
      <div>
        <div className="modalwrapper">
            <div className="modal">  
              <form onSubmit={this.submit} className="form">  
              <div>
              <label htmlFor='name'>User Name :</label><br/>
               <input 
               required
               type='text'
               placeholder='Enetr your name'
               id='name'
               onChange={this.changeName}
               value={this.state.name}/>
                </div>            
              <div>
              <label htmlFor='email'>Email Id :</label><br/>
               <input 
               required
               type='email'
               id='email'
               placeholder='enter your Email'
               onChange={this.changeEmail}
               value={this.state.id}/>
              </div>
                    <select  defaultValue='select' onChange={this.genderChange}>
                    <option defaultValue='select'>----select----</option>
                    <option value='Male' >Male</option>
                    <option value='Female'>Female</option>
                    </select>
                    <select  onChange={(e)=>this.statusChange(e)}>
                      <option defaultValue='select'>----select----</option>
                    <option value='green' >Active</option>
                    <option value='red' >Offline</option>
                    </select>   
                    <div className='btns'>
                    <button className={this.state.className}  type='submit'>submit</button> 
                    <button onClick={this.save} className='save'>save</button> 
                    <button onClick={this.props.togglePoppup}>cancel</button>  
                    </div>
                             
                
              </form>
            </div>
          </div>
      </div>
    )
  }
}
