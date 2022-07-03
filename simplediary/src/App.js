import React, {useState, useEffect} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
  {
    id: 1,
    author: "이나당",
    content: "첫일기",
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "길동당",
    content: "둘일기",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "곰당",
    content: "삼일기",
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: "지당",
    content: "넷일기",
    emotion: 1,
    created_date: new Date().getTime()
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>

  );
}

export default App;
