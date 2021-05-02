import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import MyCard from '../../components/MyCard';

export default function Favorites() {
    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:14, paddingTop: Constants.statusBarHeight + 20}}>
                <TouchableOpacity onPress={() => {}}>
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
                    <MyCard item={item}/>
                )}
            />
        </View>
    );
}
