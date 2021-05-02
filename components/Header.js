import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({headerTitle}) {
    const navigation = useNavigation();

    return (
        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:14, paddingTop: Constants.statusBarHeight + 20, paddingBottom: 20}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={28} />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{headerTitle}</Text>
            <TouchableOpacity onPress={() => {}}>
                <Feather name="log-out" size={28} />
            </TouchableOpacity>
        </View>
    )
}