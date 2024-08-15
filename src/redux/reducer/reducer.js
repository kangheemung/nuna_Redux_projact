

//초기화
//初期化
let initialState ={
    count:0,
    id:"",
    password:"",
    strength: 50,
    power: 50,
    speed: 50,
    luck: 50
}
function reducer(state = initialState, action){
    console.log("action은 뭐지", action);
    //if(action.type==="INCREMENT") {
    //   return {...state, count: state.count + 1 };
   // }
    switch(action.type){
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num };
        case "DECREASE":
        return { ...state, count: state.count - 1 };
        case "LOGIN":
            return { ...state, id: action.payload.id, password: action.payload.password };
        case "SET_ID":
            return { ...state, id: action.payload };
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
            default:
                return state;
    }
}

export default reducer