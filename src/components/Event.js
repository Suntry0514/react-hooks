import React from 'react';

const Event = (props) => {
    const id = props.data.id;
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(ID=${id})を本当に削除してもいいですか?`);
        if (!result) return;
        props.dispatch({ type: 'DELETE_EVENT', id: id });
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
