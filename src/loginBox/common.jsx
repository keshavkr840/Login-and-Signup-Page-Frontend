import React from "react";
import styled from "styled-components";

export const BoxContainer = styled.div`
  width : 100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const FormContainer = styled.form`
  display : flex ;
  width: 100%;
  flex-direction:column;
  box-shadow: 0px 0px 2.5px rgba(15,15,15,0.4);
`;

export const ChangeLink = styled.a`
  font-size : 12px ;
  color : rgba(200,200,200,0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size : 12px ;
  color : rgba(255,0,0,0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
    height: 42px;
    width: 100%;
    outline: none;
    border: 1px solid rgba(200,200,200,0.1);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    :required

    &::placeholder{
       color: rgba(200,200,200,1); 
    }

    &:not(:last-of-type){
        border-bottom : 1.5px solid rgba(255,255,255,0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(255,0,0);
    }
`;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 10px 40%;  
  color: #ffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(255,0,0);
  background: linear-gradient(0deg, rgba(245,0,80,1) 29%, rgba(4,0,255,1) 95%);
  &:hover{
      filter: brightness(2);
  }
`;