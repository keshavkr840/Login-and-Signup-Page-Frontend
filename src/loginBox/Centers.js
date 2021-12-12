import styled from 'styled-components';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

function Centers(props) {
    return <AppContainer>
    <h1>Login Succesful</h1>
    </AppContainer>
  }

export default Centers;