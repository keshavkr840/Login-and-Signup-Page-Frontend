import React, {useContext} from "react";
import styled from "styled-components";
import { BoxContainer, 
    FormContainer, Input,ChangeLink, SubmitButton, 
    BoldLink } from "./common";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
import Axios from "axios";
import { useState } from "react";
import validateInfo from "./validateInfo";



export function RegistrationForm(props){
    const {switchToSignin} = useContext(AccountContext);
    const url = "http://localhost:8080/user"
    const [data,setData] = useState({
        name:"",
        vaccinated:"",
        emergency_number: "", 
        skills: "",
        username: "",
        password: "",
        line_one: "",
        line_two: "",
        city: "",
        pincode: "",
        state: ""
    })
    const [errors,setErrors] = useState({
    });
    function submit(e){
        e.preventDefault();
        //errors(setErrors(validateInfo(data)))
        setErrors(validateInfo(data))
        if((Object.keys(validateInfo(data)).length)==0){
        console.log(Object.keys(validateInfo(data)).length)
        Axios.post(url,{
            name: data.name,
            vaccinated: data.vaccinated,
            emergency_number: data.emergency_number,
            skills: data.skills,
            username: data.username,
            password: data.password,
            address: {
                line_one: data.line_one,
                line_two: data.line_two,
                city: data.city,
                pincode: data.pincode,
                state: data.state
            }
        })
        
        .then(res=>{
            console.log(res.data)
        })

    }
}
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        //console.log(newdata)
    }
    return (
    <BoxContainer>
        <form onSubmit = {(e)=> submit(e)}>
        <FormContainer>
            <Input onChange={(e) => handle(e)} id="name" value={data.name} placeholder= "Name" type="text"></Input>
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            <Input onChange={(e) => handle(e)} id="line_one" value={data.line_one} placeholder= "Address line 1" type="text"></Input>
            {errors.line_one && <p style={{ color: 'red' }}>{errors.line_one}</p>}
            <Input onChange={(e) => handle(e)} id="line_two" value={data.line_two} placeholder= "Address line 2" type="text"></Input>
            <Input onChange={(e) => handle(e)} id="city" value={data.city} placeholder= "City Name" type="text"></Input>
            {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
            <Input onChange={(e) => handle(e)} id="pincode" value={data.pincode} placeholder= "Pincode" type="text"></Input>
            {errors.pincode && <p style={{ color: 'red' }}>{errors.pincode}</p>}
            <Input onChange={(e) => handle(e)} id="state" value={data.state} placeholder= "State" type="text"></Input>
            {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
            <Input onChange={(e) => handle(e)} id="vaccinated" value={data.vaccinated} placeholder= "Vaccinated Status" type="text"></Input>
            {errors.vaccinated && <p style={{ color: 'red' }}>{errors.vaccinated}</p>}
            <Input onChange={(e) => handle(e)} id="emergency_number" value={data.emergency_number} placeholder= "Emergency Number" type="text"></Input>
            {errors.emergency_number && <p style={{ color: 'red' }}>{errors.emergency_number}</p>}
            <Input onChange={(e) => handle(e)} id="skills" value={data.skills} placeholder= "Skills" type="text"></Input>
            {errors.skills && <p style={{ color: 'red' }}>{errors.skills}</p>}
            <Input onChange={(e) => handle(e)} id="username" value={data.username} placeholder= "username" type="text"></Input>
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            <Input onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder= "password"></Input>
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </FormContainer>
        <Marginer direction="vertical" margin={10}></Marginer>
        <Marginer direction="vertical" margin="1em"/>
        <SubmitButton type="submit">Register</SubmitButton>
        </form>
        <Marginer direction="vertical" margin="1em"/>
        <ChangeLink href="#"> Already Have An Account?</ChangeLink>
        <BoldLink href="#" onClick = {switchToSignin}> Sign-in!</BoldLink>
    </BoxContainer>
    );
}

//Object.keys(obj).length