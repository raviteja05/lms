import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';

export const testData=(state={},action)=>{
    
    if(action.type==='TEST'){
        return {...state,...action.payload}
    }
    return state;
}
export const result=(state={},action)=>{
    
    if(action.type==='RESULT'){
        return {...state,result:action.payload}
    }
    return state;
}
export const index=(state={},action)=>{
    
    if(action.type==='INDEX'){
        
        return {...state,index:action.payload}
    }
    return state;
}
export const currentQuestion=(state={},action)=>{
    
    if(action.type==='CURRENT_QUESTION'){
        
        return {...state,currentQuestion:action.payload}
    }
    return state;
}
export const options=(state={},action)=>{
    if(action.type==='OPTIONS'){
        
        
        
        return {...state,options:action.payload}
    }
    return state;
}

const reducers=combineReducers({result,index,testData,currentQuestion,options,formReducer})

export default reducers;