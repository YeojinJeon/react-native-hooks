import React from 'react';
import styled from 'styled-components/native';
import { useFetch } from '../hooks/useFetch';
import { View } from 'react-native';

const StyledImage = styled.Image`
background-color: #7f8c8d;
width: 300px;
height: 300px;
`;

const ErrorMessage = styled.Text`
font-size: 18px;
color: #e74c3c;
`;

const URL = 'https://dog.ceo/api/breeds/image/random';
const Dog = () => {
    const { data, error } = useFetch(URL);

    return (
        <View>
            <StyledImage source={data?.message ? { uri: data.message } : null} />
            <ErrorMessage>{error?.message}</ErrorMessage>
        </View>
    );
};

export default Dog;



