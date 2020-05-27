import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext'//Providerで共有したデータを使用するための記述

const OperationLogs = () => {
    const { state } = useContext(AppContext)//共有したいデータを引数に代入する
    return (
        <React.Fragment>
            <div>
                < h4 > 操作ログ一覧</h4 >
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>内容</th>
                            <th>日時</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.operationLogs.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.contents}</td>
                                    <td>{data.operatedAt}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
export default OperationLogs
