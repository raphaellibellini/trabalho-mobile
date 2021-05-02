import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import MyCard from '../../components/MyCard';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';

export default function Favorites() {
    const navigation = useNavigation();

    function navigateToSkills(item) {
        navigation.navigate('Skills', { item });
    }

    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:14, paddingTop: Constants.statusBarHeight + 20, paddingBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={28} />
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Meus Favoritos</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Feather name="log-out" size={28} />
                </TouchableOpacity>
            </View>
        
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
