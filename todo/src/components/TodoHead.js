import styled from "styled-components";

const TodoHeadStyle = styled.div`

  border-bottom: solid 1px #e9ecef;

  h1 {
    padding: 20px 0 0 20px;
  }

  .dayName {
    padding-left: 20px;
    padding-bottom: 20px;
    color: gray;
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

  return (
    <TodoHeadStyle>
      <h1>{dateString}</h1>
      <div className="dayName">{dayName}</div>
    </TodoHeadStyle>
  );
}
