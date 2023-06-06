import { useState } from "react";


function Comp(){
    const [principal,setPrincipal]=useState(null);
    const [rate,setRate]=useState(null);
    const [time,setTime]=useState(null);
    const [simple,setSimple]=useState(0);
   
    const changePrincipal=(e)=>{
       setPrincipal(e.target.value);
       console.log(e.target.value);
    };
    const changeRate=(e)=>{
        setRate(e.target.value);
        console.log(e.target.value);
     };
     const changeTime=(e)=>{
        setTime(e.target.value);
        console.log(e.target.value);
     };

   function Calculate(){
     if(principal==null || rate==null || time==null) {
        alert("Invalid");
        window.location.reload(true);
        return;
     }
    let mul=principal*rate*time;
    mul=mul/100;
    setSimple(mul);
   }

   function Reset(){
    window.location.reload(true);
   }

    return (
        <div className="contain">
       <div className="comp">
          <h6>Simple Calculator</h6>
           <p id="para">{"Rs."}{simple}</p>
           <div className="input">
           <input type="text" id="principal" placeholder="Principal amount"  onChange={changePrincipal}/>
           <input type="text"  id="rate" placeholder="Interest rate(p.a)%" onChange={changeRate}/>
           <input type="text" id="time" placeholder="Time period(Yr)" onChange={changeTime} />
           </div>
           <div className="button">
            <button id="calculate" onClick={Calculate}>CALCULATE</button>
            <button id="reset" onClick={Reset}>RESET</button>
           </div>
       </div>
       </div>
    );

}

export default Comp;

