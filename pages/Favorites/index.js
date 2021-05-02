import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';
import Header from './../../components/Header';

export default function Favorites() {
    const navigation = useNavigation();

    function navigateToSkills(item) {
        navigation.navigate('Skills', { item });
    }

    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
            <Header headerTitle='Meus Favoritos'/>
            <FlatList
                data={[
                {id:0, full_name: 'Spider-Man', secret_name: 'Miles Morales', image: require('../../images/miles.jpg')},
                {id:1, full_name: 'Batman', secret_name: 'Bruce Wayne', image: require('../../images/bruceWayne.jpeg')},
                {id:2, full_name: 'Ms. Marvel', secret_name: 'Kamala Khan', image: require('../../images/kamalaKhan.jpg')}
                ]}
                keyExtractor={item => String(item.id)} //para que cada elemento tenha uma chave unica
                showsVerticalScrollIndicator={false} //para ocultar a barrinha
                contentContainerStyle={{ paddingBottom: 120 }}
                renderItem={({item}) => (
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
                )}
            />
        </View>
    );
}
