import React, { useState } from "react";
import styled from "styled-components/native";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Button from "./components/Button";
import Length from "./components/Length";
import Children from "./components/Children";

const Container = styled.View`
flex: 1;
background-color: #fff;
justify-content:center;
align-items: center;
`;

const App = () => {
    return (
        <Container>
            <Children />
        </Container>
    );
};

export default App;
