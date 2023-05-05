import { useState } from "react";
import Accordian from "./accord";
import "./faq.css"

import  {questions} from "./api";
const faq = () => {
    const [data]=useState(questions)
    return (
        <>
        <div className="faq-div">
            <div className="faq-title">
                <h2>FAQ Section</h2>
                <p>click on the question</p>
            </div>
        </div>
        <div className="faq-accordian-part">

            {data.map((item)=>{
                return  <Accordian key={item.id}question={item.quetion} answer={item.answer}/>
            })}
           
        </div>
        </>
      );
}
 
export default faq;