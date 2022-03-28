const initializeState = {
   filter: [{}]
}



const FilterName = (state = initializeState, action:any) => {
    switch(action.type){
        case 'SET-NAME':
            return {
                filter: action.payload
            }
            default:
                return state
    }
}


export const filterNameChange = (filter:any) => {
    return (dispatch:any) => {
        dispatch({
        type: 'SET-NAME',
        filter
        })
    }    
    }



export default FilterName