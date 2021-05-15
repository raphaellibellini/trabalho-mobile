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
                    <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 , marginLeft:80}}>{item.nome}</Card.Title>
                    <Button
                        buttonStyle={{borderColor:'white',marginTop:-8, alignSelf:"flex-end"}}
                        titleStyle={{}}
                        title={""}
                        type={"outline"}
                        //onPress={}
                        icon={<Icon name="share" size={25} color="#2288DD" />}
                    />
                </View>
                <Card.Divider/>
                <Card.Title>{item.alterEgo}</Card.Title>
                <Card.Image source={{uri:item.urlImagem}}>
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