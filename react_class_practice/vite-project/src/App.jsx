import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleclick1 = () => {
    setCount(count+1);
  }
  
  const handleclick2 = () => {
    setCount(count-1);
  }

 return(
<div>
            <div>
                {count}
            </div>
            <div className="buttons">
                <button onClick={handleclick1}>
                    Increment
                </button>
                <button onClick={handleclick2}>
                    Decrement
                </button>
            </div>
        </div> )
}

export default App
