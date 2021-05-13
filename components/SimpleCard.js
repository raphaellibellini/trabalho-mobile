import React, {useState} from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import {Button, Card, Icon} from "react-native-elements";
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
                <View style={{flexDirection:'row'}}>
                    <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 , marginLeft:110}}>{item.full_name}</Card.Title>
                    <Button
                        buttonStyle={{width:10, height:15, borderColor:'white', marginLeft:60, marginTop:5}}
                        titleStyle={{}}
                        title={""}
                        type={"outline"}
                        onPress={()=> navigateToSharedWithMe()}
                        icon={<Icon name="share" size={25} color="#2288DD" />}
                    />
                </View>
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