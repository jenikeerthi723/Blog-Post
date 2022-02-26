import { CONFIRMED_GET_POST, CREATE_POST_ACTION } from "../actions/PostActions";

const initialState = {posts: [
    
       {id:1,title:'Post Title',description: 'Sample description'},
       {id:2,title:'Post Title2',description: 'Sample description2'},
       {id:3,title:'Post Title3',description: 'Sample description3'},

],
};

export default function PostsReducer(state = initialState,actions) { // 1st

  if (actions.type === CREATE_POST_ACTION ) //2
  {
    const post =  {
      id:Math.random(),
      title:'Post Titles flower',
      description: 'Sample description flower' // dummy post
    };

    const posts = [...state.posts];
    posts.push(post);
    return{
      ...state,
      posts,
    }

  }  
  if(actions.type === CONFIRMED_GET_POST){
    return {
      ...state,
      posts: actions.payload,
    }
  }
  return state;
}