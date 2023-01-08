import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'

function App() {
//   const [count, setCount] = useState(0)
//   <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src="/vite.svg" className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://reactjs.org" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
  const [name, setName]= useState([]);
  let click=false

  useEffect(() => {
    names()
  },[])

  const names= async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/albums/')

    setName(await response.json())
  }


  return (
    <div className="App">

    <h1>Fetched Data</h1>
    <ol>

    {
      name.map((data)=>{
        return(
         
          <div className="card" key={data.id} onClick={()=> click = !click } >

          
          <span>{data.id}</span>
          <span className="name"> {data.title}</span>
          
          <Card id={data.id} text={data.title} />
        

          </div>
          
        )
      })
    }

    </ol>
     
    </div>
  )
}

export default App
