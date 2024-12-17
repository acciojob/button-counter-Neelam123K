
import React, {useState}from "react";

import './../styles/App.css';


const App = () => {

  const[count, setcount] = useState(0)
  const increasebyone = () => {
    setcount(count + 1)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times.</p>
        <button onClick={increasebyone}>Click me</button>
    </div>
  )
}

export default App
