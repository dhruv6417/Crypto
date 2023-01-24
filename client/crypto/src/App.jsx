import React from "react"

import { Footer,Loader,Services,Transaction,Welcome } from "./components/index"
import Navbar from "./components/Navbar"
const App=()=> {

  return (
    <div>
    
  <Navbar/>
  <Welcome/>
  <Services/>
    </div>
  )
}

export default App
