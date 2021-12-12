import './App.css';
import styled from 'styled-components';
import {LoginBox} from "./loginBox";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import { RegistrationForm } from './loginBox/registrationForm';

const AppContainer = styled.div`
  width : 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color : black;
`;

function App() {
  return <AppContainer>
    <LoginBox/>
  </AppContainer>
}

export default App;
