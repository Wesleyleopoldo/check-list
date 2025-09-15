import { useState } from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Home /> */}
      <Admin />
    </>
  )
}

export default App
