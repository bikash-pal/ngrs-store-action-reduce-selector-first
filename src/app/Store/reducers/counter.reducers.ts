import { createReducer, on } from "@ngrx/store";
import { increment,decrement,reset,multiply } from "../actions/counter.actions";
export const initialState={
    counter:0
}
const _counterReducer=createReducer(initialState,
    on(increment,state=>{return{...state,counter:state.counter+1}}),
    on(decrement,state=>{return{...state,counter:state.counter-1}}),
    on(multiply,(state,{multiplyBy})=>{return{...state,counter:state.counter*multiplyBy}}),
    on(reset,state=>initialState),
    );
export function counterReducer(state:any,action:any){
    console.log('state',state,'action:',action);
    return _counterReducer(state,action);
}