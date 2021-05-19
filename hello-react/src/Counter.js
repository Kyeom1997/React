import React, { Component } from  'react';

class Counter extends Component {
    render() {
        return  (
            <div>
                <h1>카운터</h1>
                <div>값: 0</div>
                <button>+</button>
                <button>-</button>

            </div>

        );
    } 
}

export default Counter;