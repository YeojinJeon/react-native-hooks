import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorret: false,
})`
border: 1px solid #757575;
padding: 10px;
margin: 10px 0;
width: 200px;
font-size: 20px;
`;

const StyledText = styled.Text`
font-size:24px;
margin: 10px;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Mount
    useEffect(() => {
        console.log('\n============== Form Component Mount ==============\n');
    }, []);

    // 조건:  Email 상태변화가 있을때만 호출
    useEffect(() => {
        console.log(`name: ${name}, email: ${email}\n`);
    }, [email]);

    // Unmount
    useEffect(() => {
        return () => console.log('\n============== Form Component Unmount ==============\n');
    }, []);

    return (
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>
            <StyledTextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder="name"
            />
            <StyledTextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="email"
            />
        </>
    );
};

export default Form;


