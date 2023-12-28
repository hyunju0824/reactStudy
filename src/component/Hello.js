// 컴퍼넌트

import World from "./World";
import "./Hello.css";
// 모듈 css 임포트 - styles 라는 객체가 생성됨
import styles from "./Hello.module.css";
import { useState } from "react";

// const Hello = function(){
//     <p>Hello</p>
// }
// export default Hello;

// 이렇게 한줄로 써도 됨.

export default function Hello(props) {
    console.log(props);

    // state --> 동일한 state도 각각 관리된다. 


    // let name = "Mike";

    // [변수명, state변경해주는함수] = useState('초기값') --setName 호출되어 네임 바뀌면 이 컴퍼넌트를 다시 호출
    const [name, setName] = useState('Mike');

    // state 값을 바꿔줌
    const [age, setAge] = useState(props.age);

    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";

    // function changeName() {
    //     // 마이크일때는 제인으로, 제인일 때는 마이크로 name 바꿔준다
    //     setName(name === "Mike" ? "Jane" : "Mike");
    // }




    function showName() {
        console.log("Mike");
    }


    // function showAge(age) {
    //     console.log(age);
    // }


   function showText(txt) {
    console.log(txt);
   }



    // JSX는 하나의 태그만 만들 수 있어서 div 로 감싸야 함. (<></>빈태그도 가능)
    return (<div>
    <h1 style={
        {
            // 객체이기 때문에 세미콜론 아닌 쉼표 사용 
            color : "#f00",
            borderRight : "12px solid #000",
            marginBottom : "50px",
            // 숫자는 따옴표 사용하지 않아도 됨
            opacity : 1,
        }
    }>Hello</h1>
    <World/>
    {/* 컴퍼넌트 여러번 사용 가능 */}
    <World/>



    {/* 일반 css 파일에서 사용 */}
    {/* <div className="box">Hello</div> */}


    {/* 모듈 css 사용 */}
    <div className={styles.box}>Hello</div>




    {/* state, props (화면에 어떤 데이터를 업데이트하기 위해서 이 두개 굉장 많이 사용됨.)*/}
    <h2>{name}({age}) : {msg}</h2>
    <button onClick={()=>{
        setName(name === "Mike" ? "Jane" : "Mike"); 
        setAge(age + 1);
        }}
    >
        Change
        </button>





    {/* 위에 함수 만들어 놓은 거 전달받음 */}
    <button onClick={showName}>Show name</button> 
    {/* <button onClick={
        ()=>{
            showAge(10);
        }
    }>Show age</button> */}




    {/* 2번째 방법 - 내부에 직접 함수 작성 */}
    <button onClick={()=>{console.log(30);}}>Show age</button>




    {/* 인풋은 바뀔 때마다 찍혀야하니 onChange */}
    <input type="text" onChange={(e)=>{const txt = e.target.value; showText(txt);}}/>


    </div>
    );
}