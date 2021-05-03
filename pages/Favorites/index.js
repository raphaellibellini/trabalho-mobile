import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './../../components/Header';
import SimpleCard from "../../components/SimpleCard";

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
                    <SimpleCard props={item}></SimpleCard>
                )}
            />
        </View>
    );
}
