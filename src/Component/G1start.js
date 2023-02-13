import { useEffect, useState } from 'react'; 
import {useTypewriter,Typewriter} from 'react-simple-typewriter'

function GCpt(props){ 
    const [text,seText] = useState('');
    let [textNum,settextNum] = useState(0);
    const [anwserA1,setAwnserA1] = useState(0);
    const [advice,setAdvice] = useState(false);
   
    console.log(anwserA1);
    useEffect(()=>{
      seText("ก่อนอื่นเกมนี้เป็นเกมตอบคำถามสำหรับ...หากคุณไม่ใข่...โปรดใส่หัวออกไป");
    })
   /*function anwser(a){
      a? setAwnserA1(true) : setAwnserA1(false);
      console.log(anwserA1);
    }*/
    function next(){
      console.log("next");
      setAdvice(true);
      console.log(advice);
      document.getElementById('gametwo').style.display = "none";
    }
    function setAwnser(a){
      a ? setAwnserA1(1) : setAwnserA1(2);
      const b = document.getElementsByClassName('catnip-anwser');
      for(let i=0;i<b.length;i++){
        console.log(i);
        console.log(b[i]);
        b[i].style.pointerEvents = "none"
      }
    }
    function clcik1(){
      settextNum(textNum++)
      switch (textNum){
        case 1 :
          document.getElementById('A1').style.display = "none"
          break;
        case 3 :
            document.getElementById('box-textA1').style.marginTop = "30px";
            document.getElementById('GA1-img').style.opacity = "1";
            document.getElementById('btnA1').style.opacity = "0";
            const a = document.getElementsByClassName('catnip-anwser');
            setTimeout(()=>{
             for(let i=0;i<a.length;i++){
                console.log(i);
                console.log(a[i]);
                a[i].style.pointerEvents = "all"
              }
              a[0].style.opacity = "1";
              setTimeout(()=>{
                a[1].style.opacity = "1";
                setTimeout(()=>{
                  a[2].style.opacity = "1";
                },350)
              },350)
            },3950)
            break;
      }
      console.log(textNum);
    
    }
 
/*  function Game1(){
    console.log("dcscsdcsd")
    return(
      <div className='gamesrt1'>
        <div className='textGame1'><Typewriter words={["ณ 3.58น.หลังจากนอนไม่หลับมา3ขม. ในที่สุดก็หลับลง"]} 
        loop={0}
        typeSpeed={90}
        delaySpeed={10500}/></div>
      </div>
    )
  }*/

   
    return(
      <div className='game2'>
        <div id='gametwo'>
        <div id='baLoad' style={{}}></div>
      {anwserA1===1 ?  <div className="anwserA2 correctA1" id='correctA1' onClick={()=>next()}>
        <div className='correctA1-text'>ถูกต้องงง
        <button className='correctA1-button'>ไปต่อ</button></div>
        </div>
        : ""}
        {anwserA1 ===2 ? <a id='a-wrongA1' style={{outline:"none"}} href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <div className='anwserA2 wrongA1'>
        <div className='wrongA1-text'>ผิดดดดดไม่ใช่...ใช่มั้ย ไปไหนก็ไป ไป
          <button className='wrongA1-button'>ไปต่อ</button></div>
        </div>
          </a>
          : ""}
        
         <div className='G1t' id='G1t'>

        <div className='GA1-quastion'>
          <div className='GA1-img' id='GA1-img'  style={{ 
      background:`url(/img/catnip.jpg)`}}></div>
        </div>

        <div className='box-textA1' id='box-textA1'>
        <div className='textA1'>
          <div id='A1'><Typewriter words={[text]} 
        loop={0}
        typeSpeed={90}
        delaySpeed={10500}/></div>

        {textNum===1?  <div id='A2'> <Typewriter words={["เพื่อยืนยันว่าคุณคือ...จริงๆหรือไม่มาเริ่มแบบทดสอบแรก"]} 
        loop={0}
        typeSpeed={90}
        delaySpeed={10500}/></div>
         : ""}

         {textNum===2?
          <div id='A3'><Typewriter words={["ชื่อเรียกของสิ่งมีชีวิตในรูปต่อไปนี้"]} 
          loop={0}
          typeSpeed={90}
          delaySpeed={10500}/></div>
      : ""}
        </div> 
        <button className='btnA1' id="btnA1" onClick={()=>clcik1()}></button>
        </div>

        <section className='anwserA1'>
          <button className='catnip-anwser' onClick={()=>setAwnser(false)}>แหม่ว</button>
          <button className='catnip-anwser' onClick={()=>setAwnser(false)}>ต้วมเตี้ยม</button>
          <button className='catnip-anwser' onClick={()=>setAwnser(true)}>ไอ้เตี้ย</button>
        </section>        
      </div>
        </div>
              </div>
     
    )
  }
  

  

export default GCpt