import React, {useEffect,useState} from "react";
import styled from "styled-components"
import { LoginForm } from "./loginForm";
import {motion} from "framer-motion";
import { AccountContext } from "./accountContext";
import { RegistrationForm } from "./registrationForm";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const BoxContainer = styled.div`
    width: 650px;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer =  styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 125%;
    height: 650px;
    left: -70px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 60%;
    top : -300px;
    overflow: hidden;
    background: rgb(255,0,0);
    background: linear-gradient(0deg, rgba(245,0,80,1) 29%, rgba(4,0,255,1) 95%);
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 20px;
    color: #ffff;
    z-index: 10;
    margin: 0px;
`;

const SmallText = styled.h2`
    font-size: 20px;
    font-weight: 500;
    line-height: 8;
    color: #ffff;
    z-index: 10;
    margin: 0px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  padding: 0 1.8em; 
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1200px",
        borderRadius: "20%",
        transform: "rotate(0deg)"
    },
    collapsed: {
        width: "125%",
        height: "650px",
        borderRadius: "60%",
        transform: "rotate(0deg)"
    },
};

const expandingTransition = {
    type: "spring",
    duration:2.3,
    stiffness: 70,
}

export function LoginBox(props){
    const[isExpanded, setExpanded] = useState(false); 
    const [active, setActive] = useState("signin");
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        },expandingTransition.duration*1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("signup");
        }, 400);
    };

      const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("signin");
        }, 400);
      };

    const contextValue = { switchToSignup, switchToSignin };

    return(
    <Router>
      <Switch>
    <AccountContext.Provider value = {contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop
             initial = {false} 
             animate={isExpanded? "expanded" : "collapsed"} 
             variants={backdropVariants}
             transition = {expandingTransition}
             />
           {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <RegistrationForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
    </Switch>
    </Router>
    );
}