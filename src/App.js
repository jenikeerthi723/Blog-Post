import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import createPost from './Components/Posts/CreatePost';

function App() {
  return (
    
   <BrowserRouter>
    <div>
      <Header />
    <div className='container px-3 mx-auto'>
    <Switch>
     
      <Route path='/Posts' component={Posts} />
      <Route path='/createPost' component={createPost} />
      <Route path='/' component={Home} />
      

    </Switch>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
