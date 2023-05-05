import {MdAdd} from "react-icons/md";
import {BiMinusCircle} from "react-icons/bi"
import { useState } from "react";
import "./accord.css"

const Accordian = (props) => {
    const[show,setShow]=useState(false);
    return ( 
        <div className="accordian-box">
            <div className="ques-icon-div">
                <div className="icon-div">
                    <p onClick={()=> setShow(!show)}>
                       {
                        show ? (<BiMinusCircle style={{marginRight:"1rem"}}/>) : (<MdAdd style={{marginRight:"1rem"}}/>)
                       }
                    </p>
                </div>
                <div className="ques-ans-div">
                    <h3>{props.questions}</h3>
                   {show && <p>{props.answers}</p>} 
                </div>
            </div>

        </div>
     );
}
 
export default Accordian;