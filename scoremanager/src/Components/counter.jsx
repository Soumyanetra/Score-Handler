import React, { Component } from 'react';
class Counter extends Component {
    check(index){
        if (this.props.counter.value === 0)
            return 'disabled';
        else
            return '';
    }
    render() { 
        const{children,counter}=this.props
        return(
            <div className='contain-student'>
                {children}
                <h4>SCORE:{" "}{this.formatCount()}</h4>
                <button className='green' onClick={
                        ()=>this.props.onIncrement(counter)}>Increment</button>
                <button className='apple' onClick={
                        ()=>this.props.onDecrement(counter)}>Decrement</button>
                <button className='yellow' disabled={this.check(counter)} onClick={
                        ()=>this.props.onReset(counter)}>Reset</button>
                <button className='red'  onClick={
                        ()=>this.props.onDelete(counter.id)}>Remove</button>
                <button className='teal'  onClick={
                        ()=>this.props.onChangeName(counter)}>Edit Name</button>
            </div >
        );
    }
    
    formatCount()
    {
        const{value}=this.props.counter;
        return value===0?'Zero':value;
    }
    
}
 
export default Counter;