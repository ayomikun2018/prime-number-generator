import React, { useState } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [primes, setPrimes] = useState([]);

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num !== 1 && num !== 0;
      }
      function generatePrimes(n) {
          const newPrimes = [];
          for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
             newPrimes.push(i);
            }
          }
          setPrimes(newPrimes);
        }  
        
  return (
    <div className="App">
  <h2 >Prime number generator</h2>
           <input   placeholder= 'Enter number..'  data-testid="number-input" type="number" onChange={(e) => generatePrimes(e.target.value)} />
      <Table striped bordered hover style= {{width: "80vw", margin: "auto"}}>
      <thead>
          <tr data-testid='result'>
            <th></th>
            {primes.map((prime, index) => (<th key={index}>{prime}</th>))}
          </tr>
          </thead>
        <tbody>
          {primes.map((prime, primer) => (
            <tr key={primer}>
              <th>{prime}</th>
              {primes.map((secondPrime, primers) =>(
                <td key={primers}>{secondPrime * prime}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </Table> 
    </div>
  );
}

export default App;

























// import { useState } from "react";

// function App() {
//   //  const [num, setNum] = useState('')
//   const [input, setInput] = useState("");
  

//   const getInput= e =>{
//     setInput(e.target.value)
   
//   }
//   let num = input;
//   const setNum=(lowerNum, higherNum)=> {
//     for (let i = lowerNum; i <= higherNum; i++) {
//       let isEven = 0;
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           isEven = 1;
//           break;
//         }
//       }
//       if (i > 1 && isEven === 0) {
//             console.log(i) 
//       }
//     }
//   }
//    setNum(2, num);
  
 
//     // function setButton (){
//     //   setResult(setNum)

//     // }
   
//   //  function setButton (){
//   //    if (input === 0){
//   //     console.log(null)
//   //    }
//   //    console.log( 'new', input)
//   //  }

//   return (
//     <div className="App">
//       <h1>Prime-Number Generator</h1>

//       <input type="text" onChange={getInput} />
//       {/* <button onClick={result}>Submit</button> */}
   
//     </div>
//   );
// }

// export default App;

