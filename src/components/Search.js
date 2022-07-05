import React, { Component } from 'react'
import {FaSearch} from 'react-icons/fa'
import Cards from './Cards'
import {AiOutlineUserAdd} from 'react-icons/ai'
import Modal from './Modal'
import {Mock} from './Mock'
export default class Search extends Component {
     
state={
  text:'',
  istoggle:false,
  datas:Mock,
  status:'',
}
addDataToMock = (val) => {
        
  console.log(val)
  const newdata = this.state.datas.concat({
    name: val.name,
    id: val.id,
    gender:val.gender,
    status:val.status
  });
  this.setState({
    datas: newdata,
     istoggle:val.istoggle,
  });
};

togglePoppup=()=>{
  this.setState({
    istoggle:!this.state.istoggle
  })
}
changetext=(e)=>{
  this.setState({
    text:e.target.value
  }) 
}

cancel=()=>{
  this.setState({
    text:''
  }) 
}


  render() {
    if(this.state.istoggle){
      return(
       <>
        <Modal togglePoppup={this.togglePoppup} addDataToMock={this.addDataToMock}/>
        <div>
         <div className='search'>
            <div className='idtag'>
                <h5> You searched for : { this.state.text}</h5>
                <button onClick={this.cancel}>X</button>
            </div>
            <div>
              <button className='addBtn' onClick={this.togglePoppup}>
                <h1>Add</h1>
                <AiOutlineUserAdd size={28}/>
                </button>
              </div>
           
           <div className='searchbtn'>
           <button ><FaSearch size={20}/></button>
           <input type='text' 
           placeholder='Search with id'
           onChange={this.changetext} 
           value={this.state.text}
          />
           </div>
        </div><hr/>
        <div className='grid'>
        <Cards text={this.state.text} datas={this.state.datas} state={this.state} />
        </div>
      
      </div>
       </>
      )
   } 
     return (
      <div>
         <div className='search'>
            <div className='idtag'>
                <h5> You searched for : { this.state.text}</h5>
                <button onClick={this.cancel}>X</button>
            </div>
            <div>
              <button className='addBtn' onClick={this.togglePoppup}>
                <h1>Add</h1>
                <AiOutlineUserAdd size={28}/>
                </button>
              </div>
           
           <div className='searchbtn'>
           <button ><FaSearch size={20}/></button>
           <input type='text' 
           placeholder='Search with id'
           onChange={this.changetext} 
           value={this.state.text}
          />
           </div>
        </div><hr/>
        <div className='grid'>
        <Cards text={this.state.text} datas={this.state.datas} state={this.state} />
        </div>
       
      </div>
    )
   
  }
  
}
