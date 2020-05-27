/* 
//書いた内容
action{
    type:'CREATE_EVENT',
    title:2020東京オリンピックのおしらせ,
    body:'2020に東京オリンピックを開催します。'
} 

何もない状態
#before
state=[]

#after
state=[
    {
        id:1,
        title:2020東京オリンピックのおしらせ,
        body:'2020に東京オリンピックを開催します。'
    } 
]

データがある状態
#before
state=[
    {id:1,title:タイトル1, body:ボディー1}
    {id:2,title:タイトル2, body:ボディー2}
    {id:3,title:タイトル3, body:ボディー3}
]

#after
state=[
    {id:1,title:タイトル1, body:ボディー1}
    {id:2,title:タイトル2, body:ボディー2}
    {id:3,title:タイトル3, body:ボディー3}
    {
        id:4,
        title:2020東京オリンピックのおしらせ,
        body:'2020に東京オリンピックを開催します。'
    } 
]
*/

//state=[]:stateが未定義の時、初期化
const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length;
            let id = length === 0 ? 1 : state[length - 1].id + 1;
            return [...state, { id: id, ...event }]//stateに{}のデータを追加

        case 'DELETE_EVENT':
            return state.filter(data => data.id !== action.id);//条件がtrueになるものだけ取り出す

        case 'DELETE_ALL_EVENT':
            return [];

        default:
            return state;
    }
}

export default events