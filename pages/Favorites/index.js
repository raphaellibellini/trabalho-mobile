import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements'
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

export default function Favorites() {
    const navigation = useNavigation();

    function navigateToSkills() {
        navigation.navigate('Skills');
    }

    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
        <FlatList
            data={[
            {id:0, full_name: 'Spider-Man', secret_name: 'Miles Morales', image: require('../../images/miles.jpg')},
            {id:1, full_name: 'Batman', secret_name: 'Bruce Wayne', image: require('../../images/bruceWayne.jpeg')},
            {id:2, full_name: 'Ms. Marvel', secret_name: 'Kamala Khan', image: require('../../images/kamalaKhan.jpg')}
            ]}
            keyExtractor={item => String(item.id)} //para que cada elemento tenha uma chave unica
            showsVerticalScrollIndicator={false} //para ocultar a barrinha
            contentContainerStyle={{ paddingBottom: 72, paddingTop: Constants.statusBarHeight + 20 }}
            renderItem={({item}) => (
            <Card style={{padding: 30}}>
                <Card.Title style={{color: '#2288DD'}}>{item.full_name}</Card.Title>
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
            )}
        />
        </View>
    );
}
