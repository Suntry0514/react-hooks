import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import Event from './Event'
//className = ～というようにすることでボタンの見た目などをbootStrapによって変更することができる。
//～に記述する内容はbootstrapのホームページのDucumentationから調べることができる。
const App = (props) => {

  //reducer//第１引数：reducer、２引数：初期化時の値、３引数：初期化時のみ処理するコールバック関数
  const [state, dispatch] = useReducer(reducer, []);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    //#region 説明
    /*dispatch(action)
      action={
        type:'CREATE_EVENT',
        title:,
        body:
      } */
    //#endregion
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    });
    setTitle('');
    setBody('');
  }

  const deleteAllEvent = (e) => {
    e.preventDefault();
    let result = window.confirm("すべてのイベントを本当に削除してもいいですか？");
    if (!result) return;
    dispatch({ type: 'DELETE_ALL_EVENT' });
  }

  const unCreatable = title === '' || body === '';
  const unDeletable = state.length === 0;

  return (
    <React.Fragment>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル </label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ </label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
          </div>

          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvent} disabled={unDeletable}>すべてのイベントを削除する</button>
          <h4>イベント一覧</h4>
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
                state.map((data, index) => (<Event key={index} data={data} dispatch={dispatch} />))
              }
            </tbody>
          </table>
        </form>
      </div>
    </React.Fragment>
  );
}


export default App;