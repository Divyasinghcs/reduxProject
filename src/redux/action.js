export const changeName=(name)=>({
    type:"CNAME",
    payload:{name}
})


export const changeEmail=(email)=>({
    type:"CEMAIL",
    payload:{email}
})

export const changePhoneNumber=(phoneNo)=>({
    type:"CPHONENUMBER",
    payload:{phoneNo}
})

export const changeEmailAndPhoneNumber=(email,phoneNo)=>({
    type:"CEMAILANDPHONENUMBER",
    payload:{email,phoneNo}
})

export const changeNameToDefault=()=>({
    type:"CNAMETODEFAULT"
})

export const changeEmailAndPhoneNumberToDefault=()=>({
    type:"CEMAILANDPHONENUMBERTODEFAULT"
})
