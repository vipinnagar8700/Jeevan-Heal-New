const initalstate={
    filterdocter:""
}


 const filterreducer=(state=initalstate,action)=>{
    if(action.type==='Filter'){
        return{
            ...state,filterdocter:action.payload.docter
        }
    }
    return state;
}
export   default filterreducer;