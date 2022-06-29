import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTodoList } from "../store/slices/todoSlice";
import TodoItem from "./TodoItem";

const TodoListStyle = styled.div`
  padding: 20px;

  h3 {
    color: gray;
  }
`;

export default function TodoList() {
  const todoList = useSelector(selectTodoList);

  return (
    <TodoListStyle>
      {todoList.length ? (
        todoList.map((it) => <TodoItem key={it.id} todo={it} />)
      ) : (
        <h3>할 일이 없습니다.</h3>
      )}
    </TodoListStyle>
  );
}
