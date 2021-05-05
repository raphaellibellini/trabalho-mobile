import React, {useState} from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import {Button, Card} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

export default function SimpleCard({props}) {

    const navigation = useNavigation();

    const [item, setItem] = useState(props)

    function navigateToSkills(item){
        navigation.navigate('Skills', { item });
    }

    return (
        <View >
            <Card style={{padding: 30}}>
                <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 }}>{item.full_name}</Card.Title>
                <Card.Divider/>
                <Card.Title>{item.secret_name}</Card.Title>
                <Card.Image source={item.image}>
                </Card.Image>
                <View style={{marginTop: 16 , flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button
                        buttonStyle={{paddingHorizontal: 24}}
                        onPress={() => navigateToSkills(item)}
                        type= "outline"
                        title='Ficha Técnica' />
                    <Button
                        buttonStyle={{paddingHorizontal: 32}}
                        title='Favoritar' />
                </View>
            </Card>
        </View>
    )
}