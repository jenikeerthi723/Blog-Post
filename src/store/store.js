import {applyMiddleware, createStore}  from 'redux';
import { confirmedGetPostAction, GET_POST } from './actions/PostActions';

import PostReducer from './reducers/PostReducer';
import axios from 'axios';
import thunk from 'redux-thunk';



const loggerMiddleware= (store) => (next)=> (action)=> 
{
    console.log("dispatching actions",action)

    console.log("before dispatching state",store.getState());

    let result = next (action);
    
    setTimeout(()=>{
        console.log('dispatch time out');
    },5000);                                  //asynchronous 
    
    console.log("next state",store.getState());
    return result;
}; 

const fetchDataMiddleware = store =>next =>action =>{  

    if(action.type === GET_POST){
        //ajax call
        // axios.get('https://react-course-33de1-default-rtdb.firebaseio.com/posts.json').then(response =>{
        //     console.log(response.data);
        //     let posts = [];
        //     for (let key in response.data){
        //         posts.push({...response.data[key], id: key})
        //     }
        //     store.dispatch(confirmedGetPostAction(posts));
        // });
    }
    return next(action);
}

const composeEnhancers =
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ; // redux devtool extensions,middleware concept
 

const middleware = applyMiddleware(thunk);

export const store = createStore(PostReducer,composeEnhancers(middleware)); 


// state of your whole application stored an obj tree within a single store

    
                       
        
    