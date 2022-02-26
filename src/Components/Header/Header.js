import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){
    
    return (<div>
         <div className=" bg-red-400 text-white px-2 flex items-center">
             <h2 className="font-bold text-lg mr-4"> React Router</h2>
             <div>
                 <Link to = "/" className="px-2"> Home </Link>
                 <Link to = "/posts"className="px-2"> Posts </Link>

             </div>
  

         </div>
          </div>
    );
}
export default Header;