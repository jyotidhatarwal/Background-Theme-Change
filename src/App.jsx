import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
  <>
    <div className='main-container'
      style={{
        backgroundColor: color,
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
      }}
    >

   </div>
      <div className='footer-container'
      style={{
        position: 'fixed',
        bottom: '0',
        paddingBottom: '20px',
        marginBottom: '30px',
        left: '0',
        paddingLeft: '20px',
        paddingRight: '20px',
        right: '0',
        width: '60%',
        margin: 'auto'
      }}
      >
      <div
        style={{
        backgroundColor: 'white',
        borderRadius: '6px',
        padding: '10px',
        margin: '0 auto',
        textAlign: 'center',
        border: '1px solid black'

        }}
      >
        <button className='red'
         onClick={() => setColor("red")}
        style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '8px',
          margin: '5px',
          
        }}
        >Red</button>
        <button className='green'
        onClick={() => setColor('green')}
        style={{
          backgroundColor: 'green',
          color: 'white',
          borderRadius: '8px',
          margin: '5px'
        }}
        >Green</button>
        <button className='blue'
        onClick={() => setColor('blue')}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          borderRadius: '8px',
          margin: '5px'
        }}
        >Blue</button>
        <button className='lavender'
        onClick={() => setColor('lavender')}
        style={{
          backgroundColor: 'lavender',
          color: 'black',
          borderRadius: '8px',
          margin: '5px'
        }}
        >Lavender</button>
        <button className='black'
        onClick={() => setColor('black')}
        style={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '8px',
          margin: '5px'
        }}
        >Black</button>
        <button className='yellow'
        onClick={() => setColor('Yellow')}
        style={{
          backgroundColor: 'Yellow',
          color: 'black',
          borderRadius: '8px',
          margin: '5px'
        }}
        >Yellow</button>
        <button className='pink'
        onClick={() => setColor('Pink')}
        style={{
          backgroundColor: 'Pink',
          color: 'black',
          borderRadius: '8px',
          margin: '5px'
        }}
        >Pink</button>
      </div>
      </div>
     </>
  )
}

export default App
