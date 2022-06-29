import styled from "styled-components";

const TodoTemplateStyle = styled.div`
  width: 512px;
  height: 768px;

  background: white;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
`;

export default function TodoTemplate({ children }) {
  return (
    <TodoTemplateStyle>
      {children}
    </TodoTemplateStyle>
  );
}
