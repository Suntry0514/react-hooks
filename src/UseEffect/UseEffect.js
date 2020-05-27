import React, { useState, useEffect } from 'react';


const UseEffect = (props) => {

    const [state, setState] = useState(props);
    const { name, price } = state;//このようにすることでstate.nameなどのように長くならない

    //レンダリングの後(=divなどの内容を表示された後)で実行される。componentDidMount componentDidUpdateみたいなもの
    useEffect(() => {
        //console.log('UseEffect is invoked');
    })

    //レンダリングの後(=divなどの内容を表示された後)で実行される。componentDidMount みたいなもの　最初だけ実行される 
    useEffect(() => {
        //console.log('UseEffect is invoked');
    }, [])

    //特定のパラメータ変更時のみ実行
    useEffect(() => {
        //console.log('this callback is for name only');
    }, [name])


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

UseEffect.defaultProps = {
    name: '',
    price: 1000
}

export default UseEffect;