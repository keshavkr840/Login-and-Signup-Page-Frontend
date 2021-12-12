import React, {useContext} from "react";
import styled from "styled-components";
import { BoxContainer,
     FormContainer, Input,ChangeLink,
      SubmitButton,
       BoldLink } from "./common";
import { Marginer } from "../Marginer";
import Axios from "axios";
import { AccountContext } from "./accountContext";
import { useState } from "react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Centers from "./Centers";
import { ReactDOM } from "react";
  

export function LoginForm(props){
    const history = useHistory();
    const { switchToSignup } = useContext(AccountContext);
    const url = "http://localhost:8080/login"
    const [data,setData] = useState({
        username: "",
        password: ""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            username: data.username,
            password: data.password
        })
        .then(res=>{
            // console.log(res.data)
            // ReactDOM.render(
            //     <Router>
            //        <Switch>
            //               <Route exact path="/cowin" component={Centers}/>
            //         </Switch>
            //     </Router>,
            //     document.getElementById('root')
            // );
            console.log(res.data)
            if((res.status)==200){
                history.push({
                pathname: '/cowin',
                state : {username: data.username}
                })
            }
        })
        .catch(error=>{
            if(error.response){
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return( 
        <BoxContainer>
        <form onSubmit={(e)=> submit(e)}>  
        <FormContainer>
            <Input onChange={(e) => handle(e)} id="username" placeholder= "UserName" value={data.username}></Input>
            <Input onChange={(e) => handle(e)} id="password" type="password" placeholder= "Password" value={data.password}></Input>
        </FormContainer>
        <Marginer direction="vertical" margin={10}></Marginer>
        <ChangeLink href="#">Forgot your password?</ChangeLink>
        <Marginer direction="vertical" margin="1em"/>
        <SubmitButton type="submit">Signin</SubmitButton>
        </form>
        <Marginer direction="vertical" margin="1em"/>
        <ChangeLink href="#"> Dont Have an account?</ChangeLink>
        <BoldLink href="#" onClick = {switchToSignup}> Register Here!</BoldLink>
    </BoxContainer>
    );
}