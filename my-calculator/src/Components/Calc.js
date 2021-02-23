import { useState } from 'react';

function Calc() {

  const [r, setR] = useState([0]);

  let x = [];
  console.log(r);

  function calcNum (e) {
    x.push(e.target.textContent)
    return setR(x.join(''))
  }

  return (
    <>
      <div className='mt-5 w-25 ml-auto mr-auto border border-danger'>
        <div className='pt-5 d-flex align-items-center px-2'>
          <h1 className='flex-grow-1'>{r}</h1>
        </div>
        <button className='h1 bg-light border mb-0 w-50 p-3'>Clear</button>
        <button className='h1 bg-danger border mb-0 w-25 p-3'>=</button>
        <button className='h1 bg-danger border mb-0 w-25 p-3'>+</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>7</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>8</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>9</button>
        <button className='h1 bg-danger border mb-0 w-25 p-3'>-</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>4</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>5</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>6</button>
        <button className='h1 bg-danger border mb-0 w-25 p-3'>x</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>3</button>
        <button className='h1 bg-light border mb-0 w-25 p-3'>2</button>
        <button onClick={calcNum} className='h1 bg-light border mb-0 w-25 p-3'>1</button>
        <button className='h1 bg-danger border mb-0 w-25 p-3'>/</button>
      </div>
    </>
  )
}

export default Calc;