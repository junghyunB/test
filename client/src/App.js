import logo from './logo.svg';
import './App.css';
import axios from "axios";



function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
  <h1>글 목록</h1>
  <table>
      <tr>
        <td>No</td>
        <td>Title</td>
        <td>Contents</td>
      </tr>
    <tr>
      <td>번호</td>
      <td>제목</td>
      <td>내용</td>
    </tr>     
  </table>
  </>
  );
}

export default App;
