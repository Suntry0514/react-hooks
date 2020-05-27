import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import Events from './Events';
import OperationLogs from '../components/operationLog';
const APP_KEY = 'appWithRedux';


//className = ～というようにすることでボタンの見た目などをbootStrapによって変更することができる。
//～に記述する内容はbootstrapのホームページのDucumentationから調べることができる。
const App = (props) => {
  //保管したデータの取り出し
  const appState = localStorage.getItem(APP_KEY);
  //removeItem(key);指定したデータを取り消す
  //clear();すべて取り消す

  //JSON.parse(appState) JSONで文字列にしたデータをもとに戻す
  const initialState = appState != null ? JSON.parse(appState) : {
    events: []
  }
  //reducer//第１引数：reducer、２引数：初期化時の値、３引数：初期化時のみ処理するコールバック関数
  const [state, dispatch] = useReducer(reducer, initialState);

  //stateの状態が変わったら、関数が処理される。
  useEffect(() => {
    const string = JSON.stringify(state);//引数の内容が文字列になる。
    localStorage.setItem(APP_KEY, string);//ブラウザ側にデータを蓄積する。永久に保存される。
  }, [state])

  return (
    <React.Fragment>
      <AppContext.Provider value={{ state, dispatch }}>{/***データを共有するためのタグ。valueに共有したいデータを記述する。 */}
        <div className="container-fluid">
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </React.Fragment>
  );
}


export default App;