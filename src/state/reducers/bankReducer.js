

let initial = {
    amount: 100,
    bugData: []
};


export const bankReducer = (amountState = initial.amount, action)=>{
    switch (action.type) {
        case ("deposit"):
            return amountState + action.payload;
        case ("withdraw"):
            return amountState - action.payload;
        default:
            return amountState;
    }
}




export const bugReducer = (state = initial.bugData, action) => {  
    switch (action.type) {
        case ("addBug"):
            return ([...state,
                {
                    id: action.payload.id,
                    description: action.payload.description,
                    resolved: false
                }
            ])
            default:
                return state;
        // case ("removeBug"):
        //     return (
                
        //     )
    }
    
}