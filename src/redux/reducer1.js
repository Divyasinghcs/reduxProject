const initialState = {
  name: "",
};

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "CNAME":
     { console.log("cname is called", action.payload.name)
        return {
         ...state, 
         name: action.payload.name
         };}
    default:
        return state 
        
  }

};

export default reducer1;
