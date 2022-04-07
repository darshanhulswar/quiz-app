
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const ithdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}


let lastid = 0;
export const addBug = (description)=>{
    return (dispatch) => {
        dispatch({
                type: "addBug",
                payload:{
                    id: ++lastid,
                    description: description  
                    }
        })
    }
}