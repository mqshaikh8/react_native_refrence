const initialState = {infoType:"Islam",religion:"",article:"Loading...",id:12}

    const inforeducer = (state=initialState, action) => {
    switch (action.type) {
        case "infoDivDecider":
            return {...state,infoType: action.payload}
        case "religiousInfo":
            return {...state,religion: action.payload}
        case "article":
            return {...state,article: action.payload}
        case "id":
            return {...state,id: action.payload}






     default:
       return state
               }
    }
export default inforeducer