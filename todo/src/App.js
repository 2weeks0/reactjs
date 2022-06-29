import { createGlobalStyle } from "styled-components";
import Todo from "./pages/Todo";
import { Provider } from "react-redux";
import store from "./store";

const GlobalStyle = createGlobalStyle`
body { 
  margin: 0;
  padding: 0;
  background: #e9ecef;
}
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Todo />
    </Provider>
  );
}

export default App;
