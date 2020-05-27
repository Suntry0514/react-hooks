import { OperationLogAction } from '../Actions/actions'

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case OperationLogAction.ADD_OPERATION_LOG:
            const operationLog = {
                contents: action.contents,
                operatedAt: action.operatedAt
            };
            return [operationLog, ...state];//先頭に追加していく

        case OperationLogAction.DELETE_ALL_OPERATION_LOGS:
            return [];

        default:
            return state;
    }
}
export default operationLogs