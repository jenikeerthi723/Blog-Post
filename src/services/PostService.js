import axios from "axios";

export function getPosts(){
    return axios.get(
        'https://react-course-33de1-default-rtdb.firebaseio.com/posts.json'
    );
}




export function formatPosts(postsData)
{
    let posts = [];
        for (let key in postsData){
            posts.push({...postsData[key], id: key});
        }
        
        return posts;}


