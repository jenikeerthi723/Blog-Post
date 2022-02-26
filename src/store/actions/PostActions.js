
import { formatPosts, getPosts } from "../../services/PostService";
export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const GET_POST = '[Post Action] Get Posts'
export const CONFIRMED_GET_POST = '[Post Action] Confirmed Get Posts';

export function createPostAction(){
    return{

      type: CREATE_POST_ACTION,


    };
  }
  export function getPostAction(){
    return(dispatch, getState) =>{
      console.log(getState());

      getPosts()
      // axios.get('https://react-course-33de1-default-rtdb.firebaseio.com/posts.json')
      .then(response =>{
      
        // let posts = [];
        // for (let key in response.data){
        //     posts.push({...response.data[key], id: key})
        // }
        let posts = formatPosts(response.data);
        dispatch(confirmedGetPostAction(posts));
    });
    }
    


    };
  
  export function confirmedGetPostAction(posts){
    return{

      type: CONFIRMED_GET_POST,
      payload: posts,

    };
  }