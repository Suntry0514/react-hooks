import React, { useState } from 'react';

const MultipleState = (props) => {
    const initialStates = {
        name: '',
        price: 1000
    }
    const [name, setName] = useState(initialStates.name);
    const [price, setPrice] = useState(initialStates.price);
    const [name2, setName2] = useState(props.name2);
    const [price2, setPrice2] = useState(props.price2);


    return (
        <React.Fragment>
            <div>
                <p>現在の{name}は、{price}円です。</p>
                <p>現在の{name2}は、{price2}です。</p>
            </div>
            <button onClick={() => setPrice(price + 100)}>+100</button>
            <button onClick={() => setPrice(price - 100)}>-100</button>
            <input value={name} onChange={e => setName(e.target.value)}></input>
        </React.Fragment>

    );
}

MultipleState.defaultProps = {
    name2: 'default',
    price2: 100
}
export default MultipleState;
