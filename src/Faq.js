import React from 'react';
import App from './App';


  const Faq = () =>{
      return(
          <>
          {Data.map((item,index)=>(
           <Faq key={item+ index} qstn={item.question} answer={item.answer}/>
        ))};
          </>
      )
  }

  export default Faq;