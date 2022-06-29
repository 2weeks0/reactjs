import { createGlobalStyle } from "styled-components";
import Todo from "./pages/Todo";

const GlobalStyle = createGlobalStyle`
body { 
  margin: 0;
  padding: 0;
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
}

export default App;
