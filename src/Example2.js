import {useState} from 'react';


//state 를 useState 라는 hooks 를 사용하여 제어한다.
/*
const [text, setText] = useState("텍스트");
    text 는 this.state.text 같이 값을 가져온다 (기본값)
    setText 는 this.setState 처럼 값을 할당할 때 사용한다.
    setText 는 함수이다.
    useState() 괄호 안에는 초기화 하는 값을 설정한다.
*/
const Example2 = () => {
    const [text , setText] = useState("텍스트");
    const changeHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input onChange={changeHandler}/>
            <h1>{text}</h1>
        </div>
    );
};

export default Example2;