import React, { useRef, useState, useEffect, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {

    const { onCreate } = useContext(DiaryDispatchContext);
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }

        if (state.content.length < 5) {
            alert("5자 이상 입력하세요")
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("저장 성공");
        setState({
            author: "",
            content: "",
            emotion: 1
        })
    }

    return (
        <div className="DiaryEditor">
            <h2> 오늘의 일기 </h2>
            <div>
                <input
                    placeholder="작성자를 입력해주세요"
                    ref={authorInput}
                    name="author"
                    value={state.author}
                    onChange={handleChangeState} />
            </div>
            <div>
                <textarea
                    placeholder="내용을 입력해주세요"
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState} />
            </div>
            <div>
                <span> 오늘의 감정점수 : </span>
                <select name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    )
};

export default React.memo(DiaryEditor);