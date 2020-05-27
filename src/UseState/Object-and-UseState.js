import React, { useState } from 'react';

const ObjectUseState = (props) => {

    const [state, setState] = useState(props);
    const { name, price } = state;//このようにすることでstate.nameなどのように長くならない
    return (
        <React.Fragment>
            <div>
                <p>現在の{name}は、{state.price}円です。</p>
            </div>
            <button onClick={() => setState({ ...state, price: price + 100 })}>+100</button>{/*stateをすべて渡して、その中の特定の変数を変更する*/}
            <button onClick={() => setState({ ...state, price: price - 100 })}>-100</button>
            <input value={state.name} onChange={e => setState({ ...state, name: e.target.value })}></input>
        </React.Fragment>
    );
}

ObjectUseState.defaultProps = {
    name: '',
    price: 1000
}

export default ObjectUseState;
