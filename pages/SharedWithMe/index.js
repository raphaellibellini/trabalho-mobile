import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './../../components/Header';
import SimpleCard from "../../components/SimpleCard";
import Api from '../../service/api'
import axios from 'axios';

export default function SharedWithMe() {
    const navigation = useNavigation();
    const route = useRoute();

    const [user, setUser] = useState(route.params.user);
    const [favorites, setFavorites] = useState();


    useEffect(() => {
        axios.get(Api.getUrl(`/compartilhamento/recebidos/${user.id}`))
        .then(response => {
            console.log(response.data)
            setFavorites(response.data);
        })
    },[]);

    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
            <Header headerTitle='Meus Favoritos'/>
            <FlatList
                data={favorites}
                keyExtractor={item => String(item.id)} //para que cada elemento tenha uma chave unica
                showsVerticalScrollIndicator={false} //para ocultar a barrinha
                contentContainerStyle={{ paddingBottom: 120 }}
                renderItem={({item}) => (
                    <SimpleCard props={{item, user}}></SimpleCard>
                )}
            />
        </View>
    );
}
