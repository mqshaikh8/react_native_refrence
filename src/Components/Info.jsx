import React from 'react';
import {connect} from 'react-redux'
import {articleId} from '../Redux/actions'

function Info(props){
    console.log()
    return(
        <div>
            {props.description[props.id]}
        </div>
    );
}

const mstp = (state) => {
    return {id:state.id}
}

export default connect(mstp)(Info);