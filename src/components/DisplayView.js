import React, { Component } from 'react'
import {FaEdit} from 'react-icons/fa'
export default class DisplayView extends Component {
  render() {
    console.log(this.props.state.datas)
    return (
        <div className='Poppup'>
                {
                     this.props.state.datas.map((item,index)=>{
                        if(this.props.state.ShowIndex===index+1){
                            return(
                                <div className="wrapper"  >         
                                <div className="mainmodal">  
                                      <h1>Details Info</h1>
                                   <div> Name :{item.name} </div>
                                                  
                                   <div> Email : {item.id}</div>             
                                   <div> status : {
                                item.status ==='green' ? 'Active': 'Offline' 
                                   } </div>             
                                   <div> Gender : {item.gender} </div>            
                                   <div> Add : Bangalore</div>
                                 </div>
                                 <div className='popbtn'>
                                 <button onClick={()=>{this.props.edting(index+1)}} className='button'><FaEdit/></button>
                                    <button onClick={this.props.cancelShow} className='button'>X</button>
                                 </div>
                              </div>
                            )
                        }
                        return null
                })
                }
           </div> 
    )
  }
}
