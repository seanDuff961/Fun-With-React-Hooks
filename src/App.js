import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Bootstrap from 'react-bootstrap';

function countInitial() {
  console.log('run function');
  return 4;
}

function App() {

  const [count, setCount] = useState(0);
  const [numberCount, setNumberCount] = useState(0);
  const [images, setImages] = useState(['https://i.imgur.com/ceC7Xus.png']);
  const [bgVal, setBgVal] = useState('white');

  function decrementDuckCount() {
    setCount(prevCount => prevCount - 1);
    images.pop();
    setImages(images);
  }

  function incrementDuckCount() {
    setCount(prevCount => prevCount + 1);
    images.push('https://i.imgur.com/ceC7Xus.png')
    setImages(images)
  }

  function decrementCount () {
    setNumberCount(prevCount => prevCount - 1);
  }

  function incrementCount () {
    setNumberCount(prevCount => prevCount + 1);
  }

  function changeToBlue () {
    setBgVal('blue');
  }

  function changeToRed () {
    setBgVal('red')
  }

  function resetBg() {
    setBgVal('white')
  }

  return (
    <>
    <section>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 site-logo">Fun With React Hooks</span>
      </nav>
      <div className="row component-row">
        {/*normal counter*/}
        <div className="component col-sm">
          <h2 className="component-heading">Counter</h2>
          <div className="counter-wrapper-outer">
            <button className="button-styles counter-button-styles" onClick={decrementCount}>-</button>
            <div className="counter-wrapper-inner">
            {numberCount}
            </div>
            <button className="button-styles counter-button-styles" onClick={incrementCount}>+</button>  
          </div>      
        </div>
        {/*duck counter*/}
        <div className="component col-sm">
          <h2 className="component-heading">Duck Counter</h2>
          <div className="duck-wrapper-outer">
          <button className="duck-button-styles" onClick={decrementDuckCount}>-</button>
          <div className="duck-wrapper-inner">
          {
            images.length > 0 ? <>{
              images.map((image, index) => {
                return (
                  <img className="duck" src={image} key={index + 1}/>
                )
              })
            }</> : <img src='https://i.imgur.com/boFn0VG.png' className="blank-img" alt="blank" />
          }
          </div>
          <button className="duck-button-styles" onClick={incrementDuckCount}>+</button>  
          </div>     
        </div>
        {/*change background*/}
        {
          bgVal == 'white' ? <div className='component col-sm'>
          <h2 className="component-heading">Change Background Color</h2>
          <div class="change-color-button-wrapper">
            <button className="change-background-button" onClick={changeToRed}>Red</button>
            <button className="change-background-button" onClick={changeToBlue}>Blue</button>
            <button className="change-background-button" onClick={resetBg}>reset</button>
          </div>   
        </div> :
          <div className={bgVal == 'red' ? 'red-bg component col-sm' : 'blue-bg component col-sm'}>
          <h2 className="component-heading">Change Background Color</h2>
          <div class="change-color-button-wrapper">
            <button className="change-background-button" onClick={changeToRed}>Red</button>
            <button className="change-background-button" onClick={changeToBlue}>Blue</button>
            <button className="change-background-button" onClick={resetBg}>Reset</button>
          </div>   
        </div>
        }
        
      </div>
      </section>
    </>
  );
}

export default App;
