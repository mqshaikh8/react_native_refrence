import React,{Component} from 'react';
import List from './List'
import Info from './Info'
import {connect} from 'react-redux'

class InfoContainer extends Component{
    state = {
        mouse :true,
        article:"Loading..."
    }
    
    render(){
        
    return(
        <div  className="infoContainer">
            <div  className="firstColumn">
                {this.props.list ?  <List obj={this.props.list} /> : ""}
            </div>
            <div className="secondColumn">
            <Info description={this.props.articles}/>
            </div>
        </div>
    );
    }
}

const mstp = (state) => {
    let relObj = []
 
    let article = []
    if(state.religion){
     relObj = state.religion.religions.find(element => element.name === state.infoType)
     article = state.article
      
    }
    return {mainObj:relObj.name,list:relObj.categories,articles:article}
}

export default connect(mstp)(InfoContainer);

