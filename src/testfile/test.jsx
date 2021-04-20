
//fucking test file u r the man thumbs up
import React,{useState} from "react";
import CollectionItem from "../components/collection-item/collection-item.component";
import {SearchBox} from '../components/SearchBox/SearchBox'


const Test =({title,items})=> {
    const [isVisible,setIsVisible]=useState(false)
      
  const  onToggle=()=> {
        setIsVisible(!isVisible);
    }
  
    
      return (
        <div>
        <SearchBox/>
          <h1 className="text-xs-center">List of items:</h1>
          <button onClick={()=>onToggle()} className="btn btn-primary">Toggle</button>
  
          {isVisible &&
            <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
          }
        </div>
      );
    }
  

  export default Test;