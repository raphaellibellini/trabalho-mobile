import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';
import Header from './../../components/Header';
import If from '../../components/If';

export default function Skills() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;

    return (
        <ScrollView contentContainerStyle={{paddingBottom: 32}}>
            <Header headerTitle='Ficha Técnica'/>
            <Card>
                <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20, marginBottom: 16, marginLeft: 8, textAlign: 'left' }}>{item.nome}</Card.Title>
                <Card.Divider/>
                <Card.Title style={{marginLeft:8, textAlign: 'left'}}>{item.alterEgo}</Card.Title>
                <Card.Image style={{height:300}} source={{uri:item.urlImagem}}>
                </Card.Image>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
                    <Text>Altura: {item.altura}</Text>
                    <Text>Peso: {item.peso}</Text>
                </View>
                <Card.Divider/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
                    <Text>Inteligência</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>{item.inteligencia}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Força</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>{item.forca}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Velocidade</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>{item.velocidade}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Resistência</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>{item.resistencia}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Poder</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>{item.poder}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text>Combate</Text>
                    <Text style={{fontWeight: 'bold', color: '#2288DD'}}>{item.combate}</Text>
                </View>
            </Card>
        </ScrollView>
    )
}