import React, { useState, useContext } from 'react';
import { EventsAction, OperationLogAction } from '../Actions/actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils'
const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);

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
            type: EventsAction.CREATE_EVENT,
            title,
            body
        });

        dispatch({
            type: OperationLogAction.ADD_OPERATION_LOG,
            contents: 'イベントを作成しました。',
            operatedAt: timeCurrentIso8601()
        })
        setTitle('');
        setBody('');
    }
    const deleteAllEvent = (e) => {
        e.preventDefault();
        let result = window.confirm("すべてのイベントを本当に削除してもいいですか？");
        if (!result) return;
        dispatch({ type: EventsAction.DELTE_ALL_EVENT });
        dispatch({
            type: OperationLogAction.ADD_OPERATION_LOG,
            contents: 'すべてのイベントを削除しました。',
            operatedAt: timeCurrentIso8601()
        });
    }

    const deleteAllOperationLogs = (e) => {
        e.preventDefault();
        let result = window.confirm("すべての操作ログを本当に削除してもいいですか？");
        if (!result) return;

        dispatch({
            type: OperationLogAction.DELETE_ALL_OPERATION_LOGS
        });
    }

    const unCreatable = title === '' || body === '';
    const unDeletable = state.events.length === 0;

    return (
        <React.Fragment>
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
                <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>すべてのログを削除する</button>
            </form>
        </React.Fragment >
    );
}
export default EventForm;
