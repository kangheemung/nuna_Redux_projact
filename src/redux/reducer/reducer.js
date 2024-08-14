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
            const { num } = action.payload;
            const totalValue = state.strength + state.power + state.speed + state.luck;
            const strengthIncrement = Math.floor((state.strength / totalValue) * num);
            const powerIncrement = Math.floor((state.power / totalValue) * num);
            const speedIncrement = Math.floor((state.speed / totalValue) * num);
            const luckIncrement = num - (strengthIncrement + powerIncrement + speedIncrement);
        case "DECREASE":
        return { ...state, count: state.count - action.payload.num };
        case "LOGIN":
            return {
                ...state,
                id: action.payload.id,
                password: action.payload.password,
                };

            default:
            return{...state};
    }
}

export default reducer