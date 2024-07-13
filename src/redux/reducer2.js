const initialState={
    email:"",
    phoneNo:""
}
const reducer2=(state=initialState,action)=>{
    switch(action.type){
        case "CEMAIL":
            return{
                ...state,
                email:action.payload.email
            }
        case "CPHONENUMBER":
            return{
                ...state,
                phoneNo:action.payload.phoneNo
            }
        
        case "CEMAILANDPHONENUMBER":
            return{
                ...state,
                email:action.payload.email,
                phoneNo:action.payload.phoneNo

            }
        default:
            return{
                ...state,
                email:"",
                phoneNo:""
            }
    }
}


export default reducer2;