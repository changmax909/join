import React from "react";

export default class Example3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
        };
    }

    // handlChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };
    //
    // //onClick 함수추가
    // onclick = () => {
    //     const textbox = {
    //         inText: this.state.text,
    //     };
    //     fetch("http://localhost:3001/text", { //text 주소에서 받을 예정
    //         method: "post", //통신방법
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    //     })
    //         .then((res) => res.json())
    //         .then((json) => {
    //             console.log(json);
    //             this.setState({
    //                 text: json.text,
    //             });
    //         });
    // };

    // constructor 를 사용함으로써 onClick 코드를 수정한다.
    onclick = () => {
        fetch("http://localhost:3001/data", {
            method: "post", //통신방법
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    data: json.user_id,
                });
            });
    };

    // render() {
    //     return (
    //         <div>
    //             <h3>아이디 입력</h3>
    //             <input name="text" onChange={this.handlChange}></input>
    //             <button onClick={this.onclick}>전송</button>
    //         </div>
    //     );
    // }

    // constructor 를 사용함에 따라 render 코드도 수정한다.
    render() {
        return (
            <div>
                <h1>데이터 가져오기</h1>
                <h3>{this.state.data}</h3>
                <button onClick={this.onclick}>가져오기</button>
            </div>
        );
    }
}


// 설명
/*
    fetch : url 주소는 우리가 데이터를 보낼 주소이다.
    method : 보내는 방법 get post delete 등이 있음
    headers: API 응답에 대한 정보를 담음
    body: 전달할 내용입니다. 통신할때는 객체로 통신하기에 객체 타입으로 작성해야 함
    onChange : onChange 는 input 안의 값이 변경될때 발생하며
               input 에 글자를 적으면 '텍스트'라는 글자가 input 안에 글로 바뀌게 된다.
               input 으로 state 값을 변경할수있게 된다.
 */