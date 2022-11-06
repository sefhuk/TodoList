/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputList from './components/InputList';
import List from './components/List';

const App = () => {
    const [lists, setLists] = useState([
        { text: '밥 먹기' },
        { text: '잠 자기' },
    ]);

    //InputList 컴포넌트의 입력창에 입력된 값을 받아오는 함수
    const getList = (t) => {
        const newList = lists.slice(0); //lists 배열을 복사
        newList.push({ text: t }); //새롭게 입력된 값을 push
        setLists(newList);
    };

    return (
        <>
            <Header />
            <InputList getList={getList} />
            {lists.map((e, idx) => {
                return <List key={idx} text={e.text} />;
            })}
        </>
    );
};

export default App;
