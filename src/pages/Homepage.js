import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeName,changeEmail,changePhoneNumber } from '../redux/action';


export default function Homepage() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");

const dispatch=useDispatch();
const onInputChange=(event)=>{
    let inputname=event.target.name;
    let value=event.target.value;
    if(inputname==="name"){
        setName(value);
    }
    if(inputname==="email"){
        setEmail(value);
    }
    if(inputname==="phoneNumber"){
        setPhoneNumber(value);
    }
}

const onButtonClick=()=>{
    dispatch(changeName(name));
    dispatch(changeEmail(email));
    dispatch(changePhoneNumber(phoneNumber));

}
  return (
    <div>Homepage
        <label>Name:</label>
        <input type="text" name="name" onChange={onInputChange}/>
        <label>Email:</label>
        <input type="email" name="email" onChange={onInputChange}/>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" onChange={onInputChange}/>
        
        <button onClick={onButtonClick}>Submit</button>
    </div>
  )
}
