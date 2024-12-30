import React from "react";
import styled from "styled-components/native";
import Counter from "./components/Counter";
import Form from "./components/Form";

const Container = styled.View`
flex: 1;
background-color: #fff;
justify-content:center;
align-items: center;
`;

const App = () => {
    return (
        <Container>
            <Form />
        </Container>
    );
};

export default App;
