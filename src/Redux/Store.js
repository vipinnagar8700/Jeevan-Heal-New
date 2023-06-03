import { combineReducers, createStore } from "redux";
import Pharmacyreducer from "./Reducer/pharmacyregister";
import Labtestreducer from "./Reducer/labtestregister";
import filterreducer from "./Reducer/filterdocter";


const rootReducer=combineReducers({
    Pharmacy:Pharmacyreducer,
    Labtest:Labtestreducer,
    Filterdocter:filterreducer
    
})


const  store =  createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;