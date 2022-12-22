import './App.css';
// import elephant from "./images/elephant.jpeg";
// import imageData from './components/DataComponents';




function App({shrey}) {
  // code here
  console.log(shrey)
  return (
    <div className='Container'>
      <h1>Kalvium Gallery</h1>
      <div className='pictureContainer'>

        {shrey.map((pic) => {
          return(
          <img className='pictures' src={pic.img} alt='elephant'></img>
          )
          
        })}
      </div>
    </div>
  )
}

export default App;
