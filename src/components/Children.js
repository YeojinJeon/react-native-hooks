import React, { useState, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from "./Button";

// React.memo를 사용한 자식 컴포넌트
const Child = memo(({ count }) => {
    console.log('Child 렌더링');
    return (
        <View style={styles.box}>
            <Text>Count: {count}</Text>
        </View>
    );
});

const OtherChild = ({ count }) => {
    console.log('OtherChild 렌더링');
    return (
        <View style={styles.box}>
            <Text>Count: {count}</Text>
        </View>
    );
};

export default function Children() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);

    return (
        <View style={styles.container}>
            <Button title="Increment Count" onPress={() => setCount(count + 1)} />
            <Button title="Toggle Other State" onPress={() => setOtherState(otherState + 1)} />
            <Child count={count} />
            <OtherChild count={otherState} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
});
