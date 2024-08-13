//초기화
//初期化
let initialState ={
    count:0
}
function reducer(state = initialState, action){
    console.log("action은 뭐지", action);
    //if(action.type==="INCREMENT") {
    //   return {...state, count: state.count + 1 };
   // }
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + 1 };
        default:
            return {...state};
    }
}

export default reducer