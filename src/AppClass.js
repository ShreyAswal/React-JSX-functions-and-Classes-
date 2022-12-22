import { Component } from "react";
import "./App.css"
// import data from './components/DataComponents';


// import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  

  // code here
  render(){
  return (
    
    <div className='Container'>
      <h1>Kalvium Gallery</h1>
      <div className='pictureContainer'>
      {this.props.shrey.map((e) => {

        return <img className='pictures' src={e.img} alt='elephant'></img>

      })}
      </div>
       
    </div>

  )
    }
}


