import React, { useState, useRef } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';
import Lifecycle2 from './Lifecycle2';
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

  const [data, setData] = useState([]);

  const dataId = useRef(1);

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

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? { ...it, content: newContent } : it)
    )
  }

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <Lifecycle />
      <Lifecycle2 />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>

  );
}

export default App;
