import React from 'react'

// export default function App() {
//   const [pass, setPass] = React.useState(false);
 
//   handleClick = (e) => {
//     console.log('this is:', this);
//   }
    
//   }
//   return (
//     <div>
//       <h5>How to change Password ?<a onClick={() => {setPass(!pass)}} onChange={handleClick} href='#'>X</a></h5>
//     </div>
//   )
// }

class App extends React.Component{

  handleCLick = () =>{
  return  <p>CLick the setting</p>
  }
  render(){
  // const [pass, setPass] = React.useState(false);


    return(
      <>
      <h5>How to change Password ?<a href="#" onClick={this. handleCLick} >X</a></h5>
      </>
    )
  }
}

export default App;
