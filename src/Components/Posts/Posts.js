import {Component} from 'react';
import { connect } from 'react-redux';
import { createPostAction,getPostAction} from '../../store/actions/PostActions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';


class Posts extends Component{

onCreatePost() 
   {
     this.props.createPostAction(); //action called
   }
   
   componentDidMount(){
     this.props.getPostAction();
   }



    render(){

       const posts = [];

       for(let post of this.props.posts){

           posts.push(
            <div key={post.id} className="shadow-sm p-3 mb-5 bg-white rounded">   
          
                  <div>{post.title}</div>
                  <div>{post.description}</div>
                 </div>
                 
                    );
       }
        return (
            <div className='mt-4'>
            <div className='flex items-center justify-between my-4'>
            <h2 className='bolder text-lg'>Posts</h2>
            <Link to ='/createpost' className='bg-red-300 px-3 py-2'> Create Post</Link>
            </div>
            {/* < button className='bg-red-300 px-3 py-2' onClick={this.onCreatePost.bind(this)}> Create Post</button> */}
            <hr />
            <div className='flex'>{posts}</div>
            </div>
        );
    }
}

const mapstateToProps = (state) =>{
  return{
      posts: state.posts,  //whatever data need we need to get from the store in this comp sending through props
  };
};

const mapDispatchToProps = (dispatch) =>{
  
  return  bindActionCreators({createPostAction,getPostAction}, dispatch); // wrapper method
  
};

export default connect(mapstateToProps,mapDispatchToProps)(Posts); //post data sending the datas to posts