let initialState = { }
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
       case 'Intial':
         let religions = []
         action.payload.forEach(religion => {
           const {name,categories} = religion
            const dummy_obj = {[name]:categories}
            religions.push(dummy_obj)
         })
         return{...state,religions:religions}



        default:
          return state;
      }
    }
    
    export default reducer

    