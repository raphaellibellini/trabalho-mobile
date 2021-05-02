import React from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
 
export default function MyCard({item}){
    const navigation = useNavigation();

    function navigateToSkills() {
        navigation.navigate('Skills');
    }

    return(
        <Card style={{padding: 30}}>
            <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 }}>{item.full_name}</Card.Title>
            <Card.Divider/>
            <Card.Title>{item.secret_name}</Card.Title>
            <Card.Image source={item.image}>
            </Card.Image>
            <View style={{marginTop: 16 , flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
                buttonStyle={{paddingHorizontal: 24}}
                onPress={navigateToSkills}
                type= "outline"
                title='Habilidades' />
            <Button
                buttonStyle={{paddingHorizontal: 32}}
                title='Favoritar' />
            </View>
        </Card>
    )
}