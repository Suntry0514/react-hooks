import React, { useState } from 'react';

const Counter = () => {
    //2つの要素を持った配列(引数の値と関数)のreturnされる。
    //関数は初期値を操作するためもの。戻り値はキャメルケースで記述
    //この関数には引数に関数を代入することができる。
    const [count, setCount] = useState(0);

    //関数を代入している。代入した関数の引数=前の値は前の値をとる。
    const increment = () => setCount(previousCout => previousCout + 1);
    const decrement = () => setCount(count - 1);
    const countClear = () => setCount(0);

    return (
        <React.Fragment>
            <div>cout:{count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <br />
            <button onClick={countClear}>Reset</button>

        </React.Fragment>

    );
}

export default Counter;
