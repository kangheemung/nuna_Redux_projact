

//초기화
//初期化
let initialState ={
    count:0,
    id:"",
    password:"",
    additionalPoints: 10,
    status: {
        power: 10,
        speed: 6,
        defense: 40,
        luck: 10
    }
}


function reducer(state = initialState, action){
    console.log("action은 뭐지", action);
    //if(action.type==="INCREMENT") {
    //   return {...state, count: state.count + 1 };
   // }
    switch(action.type){
        case "INCREMENT_POWER":
            return { ...state, status: { ...state.status, power: state.status.power + 1 } };
        case "DECREASE_POWER":
            return { ...state, status: { ...state.status, power: state.status.power - 1 } };
        case "INCREMENT_SPEED":
            return { ...state, status: { ...state.status, speed: state.status.speed + 1 } };
        case "DECREASE_SPEED":
            return { ...state, status: { ...state.status, speed: state.status.speed - 1 } };
        case "INCREMENT_DEFENSE":
            return { ...state, status: { ...state.status, defense: state.status.defense + 1 } };
        case "DECREASE_DEFENSE":
            return { ...state, status: { ...state.status, defense: state.status.defense - 1 } };
        case "INCREMENT_LUCK":
            return { ...state, status: { ...state.status, luck: state.status.luck + 1 } };
        case "DECREASE_LUCK":
            return { ...state, status: { ...state.status, luck: state.status.luck - 1 } };
        case "INCREMENT_POINTS":
            return { ...state, additionalPoints:  state.additionalPoints - 1 };
        case "DECREMENT_POINTS":
            return { ...state, additionalPoints: state.additionalPoints + 1 };
        case "LOGIN":
            return { ...state, id: action.payload.id, password: action.payload.password };

            default:
                return state;
    }
}

export default reducer