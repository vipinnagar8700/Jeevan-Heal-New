import { city, about, address1, address2, certifiedimage, clinicimage, deliver, image, mobile, photoid, pincode, state, timeschedule } from "../String/contantstring"

const initialstate={
    city:"",
    state:"",
    address1:"jbuv",
    address2:"ihphp",
    pincode:"",
    deliver:"",
    image:false,
    certifiedimage:"",
    photoid:"",
    clinicimage:"",
    timeschedule:"",
    mobile:"",
    about:"ninihihi"
  
    
}

const Labtestreducer=(state=initialstate,action)=>{
    if(action.type===city){
        return {
            ...state,city:action.payload.city
        }

    }else if(action.type==="states"){
        return{
            ...state,state:action.payload.states
        }
    }else if(action.type===address1){
        return{
            ...state,address1:action.payload.address1
        }
    }
    else if(action.type===address2){
        return{
            ...state,address2:action.payload.address2
        }
    }
    else if(action.type===pincode){
        return{
            ...state,pincode:action.payload.pincode
        }
    }
    
    else if(action.type===clinicimage){
        return{
            ...state,clinicimage:action.payload.clinicimage
        }
    }
    else if(action.type===photoid){
        return{
            ...state,photoid:action.payload.photoid
        }
    }
    else if(action.type===deliver){
        return{
            ...state,deliver:action.payload.deliver
        }
    }
    else if(action.type==='IMAGE'){
        return{
            ...state,image:action.payload.image
        }
    }
    else if(action.type===certifiedimage){
        return{
            ...state,certifiedimage:action.payload.certifiedimage
        }
    }
    else if(action.type===timeschedule){
        return{
            ...state,timeschedule:action.payload.timeschedule
        }
    }
    else if(action.type===mobile){
        return{
            ...state,mobile:action.payload.mobile
        }
    }
    else if(action.type=== about){
        return{
            ...state, about:action.payload.about
        }
    }
   return state;
}
export default Labtestreducer;