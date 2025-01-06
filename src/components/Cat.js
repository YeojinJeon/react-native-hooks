
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { View, Text } from 'react-native';
import { ErrorMessage, LoadingMessage, StyledImage } from './Dog';
const URL = 'https://api.thecatapi.com/v1/images/search';

const Cat = () => {
    const { data, error, inProgress } = useFetch(URL);

    return (
        <View>
            <Text>Cat</Text>
            {inProgress && <LoadingMessage>The API request is in progress</LoadingMessage>}
            <StyledImage source={data?.url ? { uri: data.url } : null} />
            <ErrorMessage>{error?.url}</ErrorMessage>
        </View>
    );
};

export default Cat;