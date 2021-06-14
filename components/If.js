import React from 'react';
import {Text} from 'react-native';

const If = ({ condition, children }) => {
    return condition ? (children ? children : <Text></Text>) : <Text></Text>;
}

export default If;