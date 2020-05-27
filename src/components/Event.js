import React, { useContext } from 'react';
import { EventsAction, OperationLogAction } from '../Actions/actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = (props) => {
    const id = props.data.id;
    const { dispatch } = useContext(AppContext);
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(ID=${id})を本当に削除してもいいですか?`);
        if (!result) return;
        dispatch({ type: EventsAction.DELTE_EVENT, id: id });
        dispatch({
            type: OperationLogAction.ADD_OPERATION_LOG,
            contents: `イベント(ID=${id})を削除しました。`,
            operatedAt: timeCurrentIso8601()
        });
    }
    return (
        <tr key={props.index}>
            <td>{id}</td>
            <td>{props.data.title}</td>
            <td>{props.data.body}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}
export default Event;
