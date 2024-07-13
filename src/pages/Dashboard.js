import React from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {

    const reducer1=useSelector((state)=>state.namereducer)
    const reducer2=useSelector((state)=>state.emailreducer)
    console.log("reducer 1",reducer1)
    console.log("reducer 2",reducer2)
  return (
    <div>Dashboard
        <p>name is {reducer1.name}</p>
        <p>Email is {reducer2.email} and phoneNo is {reducer2.phoneNo}</p>
    </div>
  )
}
