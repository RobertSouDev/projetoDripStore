import { useState } from 'react'

import './App.css'
import Menu from './componets/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Menu/>
    </>
  )
}

export default App


