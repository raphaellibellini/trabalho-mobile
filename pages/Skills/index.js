import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MyCardDetailed from '../../components/MyCardDetailed';
import { useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';

export default function Skills() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;

    return (
        <View>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:14, paddingTop: Constants.statusBarHeight + 20, paddingBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={28} />
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Ficha Técnica</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Feather name="log-out" size={28} />
                </TouchableOpacity>
            </View>
            <Card style={{padding: 30, paddingTop: 32}}>
                <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 }}>{item.full_name}</Card.Title>
                <Card.Divider/>
                <Card.Title>{item.secret_name}</Card.Title>
                <Card.Image source={item.image}>
                </Card.Image>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
                    <Text>Altura: 170 cm</Text>
                    <Text>Peso: 90 Kg</Text>
                </View>
                <Card.Divider/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
                    <Text>Inteligência</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>90</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Força</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>26</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Velocidade</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>27</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Resistência</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>50</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Poder</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>70</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Combate</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>90</Text>
                </View>
                <View style={{marginTop: 24}}>
                    <Button
                        title='Excluir Favorito'
                        type='outline'
                        onPress={() => {}} 
                    />
                </View>
            </Card>
        </View>
    )
}