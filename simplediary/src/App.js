import React, {useState, useEffect, useRef} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

// const dummyList = [
//   {
//     id: 1,
//     author: "이나당",
//     content: "첫일기",
//     emotion: 4,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "길동당",
//     content: "둘일기",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "곰당",
//     content: "삼일기",
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 4,
//     author: "지당",
//     content: "넷일기",
//     emotion: 1,
//     created_date: new Date().getTime()
//   }
// ]

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };
                  //지우고자하는 타겟id
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList onDelete = {onDelete} diaryList={data}/>
    </div>

  );
}

export default App;
