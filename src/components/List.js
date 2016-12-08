import React, {Component,PropTypes} from 'react';
import "./List.css";

class List extends Component{
    
    constructor(){
        super();
        this.state={
            checked:false
        }
    }
    
    static propTypes={
        value:PropTypes.string.isRequired,
        noteDelete:PropTypes.func,
        id:PropTypes.number
    }
    
    setRef=(ref)=>{
        this.copy=ref;
    }
    
    checkStat=(event)=>{
        console.log(event.target.checked);
        let {checked}=this.state;
        checked=event.target.checked;
        this.setState({checked:checked});
        
        if(checked){
            this.copy.style.textDecoration =  "line-through";
        }
    }
    
    handleDelete=()=>{
        this.props.noteDelete(this.props.id);
    }
    
    render(){
        return(
            
            <div className="well well-sm">
                <input type="checkbox" className='checkbox' onClick={this.checkStat}></input>
                <div className='copy' ref={this.setRef}>{this.props.value}</div>
                <div className='delete' onClick={this.handleDelete}><span className="glyphicon glyphicon-remove"></span></div>
                
            </div>
        )
    }
}

export default List;