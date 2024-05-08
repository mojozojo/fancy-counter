import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Cards(){
  let [count, setCount]=useState(0);
  const locked = count === 5 ? true:false;

  useEffect(()=>{
    const handleKeydown = (event) => {
      if(event.code === 'Space'){
        if(count<5){
          setCount(count+1);
        }
      }
     };

    window.addEventListener('keydown',handleKeydown);

    return () => {
      window.removeEventListener('keydown',handleKeydown);
    }
      }, [count]); 

    return(
        <main>
        <div className={`card ${locked? "card--limit" : ''}`}>
          <Title locked={locked} />
          <Count count={count} />
          <ResetButton setCount={setCount}/>
          <ButtonContainer>
            <CountButton type="minus" setCount={setCount} locked={locked}/>
            <CountButton type="plus" setCount={setCount} locked={locked}/>
          </ButtonContainer>
        </div>
      </main>
    )
}