import './App.css';
import { useState } from 'react';
import GCpt from './Component/G1start';

function App() {
  const [fn,setFn] = useState(false);
  const [G1,setG1] = useState(false);
 ;
  function start(num){
    const a = document.getElementById('App-srt');
    const b = document.getElementById('G1t');
     if(num){
      a.style.background = "#000";
      setFn(true);
      setTimeout(()=>{
        a.style.display = 'none';
        setG1(true);
        console.log(b)
      },700)
     }
  }
 
  
  return (
    <div className='App'>
       <div className="App-srt" id='App-srt' style={{ 
      background:`url(/img/bg1.jpg)`}}>
        <button className='Startbtn' onClick={()=>start(true)}>Hover</button>
        
    </div>
    { G1? (
            <GCpt data={{i:0,t:"ก่อนอื่นเกมนี้เป็นเกมตอบคำถามสำหรับsom"}}/>
          ): ""
    }
    </div>
   
  );
}

export default App;
