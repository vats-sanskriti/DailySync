import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const handleclick1 = () => {
//     setCount(count+1);
//   }
  
//   const handleclick2 = () => {
//     setCount(count-1);
//   }

//  return(
// <div>
//             <div>
//                 {count}
//             </div>
//             <div className="buttons">
//                 <button onClick={handleclick1}>
//                     Increment
//                 </button>
//                 <button onClick={handleclick2}>
//                     Decrement
//                 </button>
//             </div>
//         </div> )
// }

const name = "sanskriti";
const number = 7;
function App()
{
  return(
    <div>
      <h1>Hello {name}</h1>
      <p>my lucky number is {number}</p>
    </div>
  )
}
export default App
