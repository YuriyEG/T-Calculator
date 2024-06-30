import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import TariffForm from "./components/TariffForm";

const Container = styled.div`
  background-color: white;
  color: rgba(0, 0, 0, 0.7);
  min-width: 300px;
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(85, 170, 255, 0.9);
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <Title>Тарифный калькулятор</Title>
        <TariffForm />
      </Container>
    </Provider>
  );
};

export default App;
