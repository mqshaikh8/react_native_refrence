import React,{Suspense,Spinner} from 'react';
import {article,articleId} from '../Redux/actions'
import {connect} from 'react-redux'
function List(props){
    

    

    let renderLi = (arr) => arr.map(element => {
        let handleArticle = () => {
            props.articleId(element.id)
            
         }

        return(
            <li onClick={(evt,element) => handleArticle(evt,element)}key={element.id}>{element.name}</li>
        )
    })
        
    

let renderNestedLists = (element) => {
    
    return(
        <div>
        <li key={element.id}>{element.name}</li>
        <ul>
        {renderLi(element.topics)}
        </ul>
        </div>
    )
    
}

let renderLists = () => props.obj.map(element => renderNestedLists(element))
    
    return(
        <div className="List">
            <ol>
         {renderLists()}
        </ol>
      </div>
    )
}

export default connect(null,{article,articleId})(List);