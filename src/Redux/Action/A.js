export const  filterdocteraction=(docter)=>{
    return{
        type:'Filter',
        payload:{docter}
    }
}


export   const filterselector=(state)=>{
      return state.Filterdocter.filterdocter
}
