import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useMemo} from 'react';
//import Bootstrap from 'react-bootstrap';

function App() {

  //useState
  const [count, setCount] = useState(0);
  const [numberCount, setNumberCount] = useState(0);
  const [images, setImages] = useState(['https://i.imgur.com/ceC7Xus.png']);
  const [bgVal, setBgVal] = useState('white');
  const [apiResponse, setApiResponse] = useState({});

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
    setBgVal('red');
  }

  function resetBg() {
    setBgVal('white');
  }

  //useEffect
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  function handleResize () {
    setwindowWidth(window.innerWidth);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        //console.log(json)
        setApiResponse(json)
        console.log(apiResponse)
      })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  //useMemo
  const [slowNumber, setSlowNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(slowNumber);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  function slowFunction (num) {
    console.log('Callling Slow Function');
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <h1 className="navbar-brand mb-0 h1 site-logo">Fun With React Hooks</h1>
      </nav>
      <div className="row">
        <h2 className="hook-heading">
          1. useState
        </h2>
      </div>
      <div className="row component-row">
        {/*normal counter*/}
        <div className="component col-sm">
          <h3 className="component-heading">Counter</h3>
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
          <h3 className="component-heading">Duck Counter</h3>
          <div className="duck-wrapper-outer">
          <button className="duck-button-styles duck-subtracted" onClick={decrementDuckCount}>-</button>
          <div className="duck-wrapper-inner">
          {
            images.length > 0 ? <>{
              images.map((image, index) => {
                return (
                  <img alt="duck" className="duck" src={image} key={index + 1}/>
                )
              })
            }</> : <img src='https://i.imgur.com/boFn0VG.png' className="blank-img" alt="blank" />
          }
          </div>
          <button className="duck-button-styles duck-added" onClick={incrementDuckCount}>+</button>  
          </div>     
        </div>
        {/*change background*/}
        {
          bgVal === 'white' ? <div className='component col-sm'>
          <h3 className="component-heading">Change Background Color</h3>
          <div className="change-color-button-wrapper">
            <button className="change-background-button" onClick={changeToRed}>Red</button>
            <button className="change-background-button" onClick={changeToBlue}>Blue</button>
            <button className="change-background-button" onClick={resetBg}>Reset</button>
          </div>   
          </div> :
          <div className={bgVal === 'red' ? 'red-bg component col-sm' : 'blue-bg component col-sm'}>
          <h3 className="component-heading">Change Background Color</h3>
          <div class="change-color-button-wrapper">
            <button className="change-background-button" onClick={changeToRed}>Red</button>
            <button className="change-background-button" onClick={changeToBlue}>Blue</button>
            <button className="change-background-button" onClick={resetBg}>Reset</button>
          </div>   
        </div>
        }
        
      </div>
      <div className="row">
        <h2 className="hook-heading">
          2. useEffect
        </h2>
      </div>

      <div className="row component-row">
        <div className="component col-sm">
        <h3 className="component-heading">Window Width</h3>
          {windowWidth} px
        </div>
        <div className="component col-sm">
          <h3 className="component-heading">API Call Information</h3>
          <div className="counter-actions-content"></div>
            <div>
              <ul className="api-list">
                <li>Title: { apiResponse.title }</li>
                <li>UserID: { apiResponse.userId }</li> 
              </ul>       
            </div>      
        </div>
      </div>

      <div className="row">
        <h2 className="hook-heading">
          2. useMemo
        </h2>
      </div>
      <div className="row component-row">
        <div className="component col-sm">
          <h3 className="component-heading">useMemo</h3>
          <>
          <input type="number" value={slowNumber} onChange={e => setNumberCount(parseInt
          (e.target.value))} />
          <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
          <div style={themeStyles}>{doubleNumber}</div>
          </>
        </div>
        <div className="component col-sm">
          {/*<h3 className="component-heading">Hello World</h3>*/}
        </div>
        <div className="component col-sm">
          {/*<h3 className="component-heading">Hello World</h3>*/}
        </div>
      </div>
    </>
  );
}

export default App;
