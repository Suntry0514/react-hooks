import React, { useContext } from 'react';
import Event from './Event'
import AppContext from '../contexts/AppContext'//Providerで共有したデータを使用するための記述

const Events = () => {
    const { state } = useContext(AppContext)//共有したいデータを引数に代入する
    return (
        <React.Fragment>
            < h4 > イベント一覧</h4 >
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディー</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/*foreachは戻り値がundefined。*/}
                    {/*mapは戻り値が新たな配列。*/}{/*以下の処理ではHTMLをreturnしている。*/}
                    {
                        //reducerが複数あるのでeventsというようになる
                        state.events.map((data, index) => (<Event key={index} data={data} />))
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}
export default Events
