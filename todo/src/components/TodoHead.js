import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTodoList } from "../store/slices/todoSlice";

const TodoHeadStyle = styled.div`
  border-bottom: solid 1px #e9ecef;

  h1 {
    padding: 20px 0 10px 20px;
    margin: 0;
  }

  .dayName {
    padding-left: 20px;
    padding-bottom: 20px;
    color: gray;
    font-size: 24px;
    font-weight: bold;
  }

  .remainTodo {
    padding-left: 20px;
    padding-bottom: 20px;
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default function TodoHead() {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });

  const remainCount = useSelector(selectTodoList).filter((it) => !it.done).length;

  return (
    <TodoHeadStyle>
      <h1>{dateString}</h1>
      <div className="dayName">{dayName}</div>
      <div className="remainTodo">할 일 {remainCount}개 남음</div>
    </TodoHeadStyle>
  );
}
