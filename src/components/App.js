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
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
