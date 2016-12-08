import React, {Component,PropTypes} from 'react';
import "./List.css"
import TweenMax from 'gsap';

class AddTodoList extends Component{
    
    propTypes:{
        addTo:PropTypes.func
    }
    
    handleAdd=(event)=>{
        event.preventDefault()
        var val = this.note.value;
        if(val!==""){
            this.note.value="";
            this.note.placeholder="Add notes here";
            this.props.addTo(val);
        }else{
            var tl = new TweenMax(this.note,.2,{y:-20,onComplete:()=>{tl.reverse();},onReverseComplete:()=>{}});
            this.note.placeholder="CANT BE EMPTY";
        }
    }
    
    setRef = (ref) =>{
        console.log(ref);
        this.note = ref;
    }

    render(){
        return(
            <form className="form-group" onSubmit={this.handleAdd}>
                <input type="text" className="form-control" placeholder="Add notes here" ref={this.setRef}></input>
                <button type="submit" className="btn btn-default btn-md add-btn">ADD</button>
            </form>
        )
    }
}

export default AddTodoList;