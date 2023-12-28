import './App.css';
// 오토임포트 됨!
import Hello from "./component/Hello";
import Welcome from './component/Welcome';
import styles from "./App.module.css";
// App 컴퍼넌트. 디폴트로 익스포트. 이걸 import 해서 사용한다.
// 함수형 컴퍼넌트
// 모든 컴퍼넌트는 대문자로 시작
function App() {
  const name = "Tom"
  // 객체
  const naver = {
    name: "네이버",
    url : "https://naver.com",
  }
  return (
  // JSX
  <div className="App">
      {/* 컴퍼넌트 내 스타일은 객체로 전달 */}
      {/* 카멜케이스 */}
      {/* 중괄호 안 숫자, 문자열 표현 가능. boolean, 객체 표현 불가 */}
      <h1 style={{color: "#f0f", backgroundColor:"green"}}>Hello, {name}.<p>{2+3}</p></h1>
      {/* 객체 값 가져오는 법 */}
      <a href={naver.url}>{naver.name}</a>



      <h3>props : properties (속성값을 의미)</h3>



      {/* 임포트한 컴퍼넌트를 원하는 위치에 적어줌 */}
      {/* 들어갈 내용이 없을 때 <Hello/> */}

      
      {/* props */}
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>



      {/* 동일한 이름의 css 적용해도 모듈에 따라 다르게 적용되는 모습 */}
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
