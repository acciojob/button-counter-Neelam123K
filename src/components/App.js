import React, { useState } from "react";

import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0); 

  return (
    <div>
      {/* Do not remove the main div */}
      <div>{count}</div>

      <button
        onClick={() => {
          setCount(count + 1);
          console.log(`Button clicked ${setCount} times`);
        }}
      >
        Increment
      </button>
    
    </div>
  );
};

export default App;
