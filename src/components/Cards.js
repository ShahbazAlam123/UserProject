import React, { Component } from "react";
import { FaEdit } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import Modal from "./Modal";
import DisplayView from './DisplayView'

export default class Cards extends Component {
  state = {
    isEditing: false,
    datas: this.props.datas,
    index: "",
    className:'submit',
    displayShow:false,
    ShowIndex:''
  };

  togglePoppup = () => {
   
    this.setState({
      isEditing: !this.state.isEditing,
      displayShow:false,

    });
  };
  edting = (val) => {
    console.log("val", val);
    this.setState({
      isEditing: !this.state.isEditing,
      index: val,
    });
  };

  DisplayPoppup=(index)=>{
      console.log(index+1)
      this.setState({
        displayShow:!this.state.displayShow,
        ShowIndex:index+1
      })
  }
  cancelShow=()=>{
    this.setState({
      displayShow:!this.state.displayShow,
    })
  }

  render() {
    console.log(this.props.text);
    if (this.state.isEditing) {
      return (
        <>
          <Modal togglePoppup={this.togglePoppup} state={this.state} />
          {this.state.datas
            .filter((val) => {
              if (this.props.text === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(this.props.text.toLowerCase())
              ) {
                return val;
              }
              return null;
            })
            .map((data, index) => {
              return (
                <div className="container" key={index + 1} >
                  <div className="main">
                    <div>
                      <img
                        className="photo"
                        src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
                        alt="profile"
                      />
                    </div>
                    <div className="form">
                      <div>
                        <div>id: {index + 1}</div>
                        <span>Name : </span>
                        <span>{data.name}</span>
                      </div>
                      <div>
                        <span>Email : </span>
                        <span>{data.id}</span>
                      </div>
                      <div>
                        <span>Gender : </span>
                        <span>{data.gender}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="status">
                      <button className={data.status}>
                        <GrStatusGoodSmall />
                      </button>
                    </div>
                    <div className="editbtn">
                      <button
                        index={index + 1}
                        onClick={() => {
                          this.edting(index+1)
                        }}
                      >
                        <FaEdit size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      );
    }
     if(this.state.displayShow ){
      return(
        <>
        <DisplayView state={this.state} cancelShow={this.cancelShow} edting={this.edting}/>
        {this.state.datas
          .filter((val) => {
            if (this.props.text === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(this.props.text.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .map((data, index) => {
            return (
              <div className="container" key={index + 1} index={index} onClick={()=>{this.DisplayPoppup(index)}}>
                <div className="main">
                  <div>
                    <img
                      className="photo"
                      src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="form">
                    <div>
                      <div>id: {index + 1}</div>
                      <span>Name : </span>
                      <span>{data.name}</span>
                    </div>
                    <div>
                      <span>Email : </span>
                      <span>{data.id}</span>
                    </div>
                    <div>
                      <span>Gender : </span>
                      <span>{data.gender}</span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="status">
                    <button className={data.status}>
                      <GrStatusGoodSmall />
                    </button>
                  </div>
                  <div className="editbtn">
                    <button 
                    index={index + 1}
                    onClick={() => {
                      this.edting(index+1)
                    }}>
                      <FaEdit size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
            );
          })}
        </>
      )
    }
    return (
      <>
      
        {this.state.datas
          .filter((val) => {
            if (this.props.text === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(this.props.text.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .map((data, index) => {
            return (
              <div className="container" key={index + 1} index={index} onClick={()=>{this.DisplayPoppup(index)}}>
                <div className="main">
                  <div>
                    <img
                      className="photo"
                      src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="form">
                    <div>
                      <div>id: {index + 1}</div>
                      <span>Name : </span>
                      <span>{data.name}</span>
                    </div>
                    <div>
                      <span>Email : </span>
                      <span>{data.id}</span>
                    </div>
                    <div>
                      <span>Gender : </span>
                      <span>{data.gender}</span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="status">
                    <button className={data.status}>
                      <GrStatusGoodSmall />
                    </button>
                  </div>
                  <div className="editbtn">
                    <button 
                    index={index + 1}
                    onClick={() => {
                      this.edting(index+1)
                    }}>
                      <FaEdit size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
            );
          })}
         
      </>
    );
  }
}
