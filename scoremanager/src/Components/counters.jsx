import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    check(){
        if (this.props.counters.length === 0)
            return 'disabled';
        else
            return '';
    }
    render() { 
        const {counters,onResetAll,onReset,onDelete,onIncrement,onDecrement,onChangeName}=this.props //object discturturing
        return (
            <div>
                <button  className="red" disabled={this.check()} onClick={onResetAll}>Reset All</button><br/><br/>
                <h4>PARTICPANT(S):</h4>
                {counters.map(counter => 
                    <Counter key={counter.id} 
                             counter={counter} 
                             onIncrement={onIncrement} 
                             onDecrement={onDecrement}
                             onReset={onReset}
                             onDelete={onDelete}
                             onChangeName={onChangeName}>
                             
                        <h2>{counter.Name}</h2>
                    </Counter>
                )}
            </div>
          );
    }
    
}
 
export default Counters;