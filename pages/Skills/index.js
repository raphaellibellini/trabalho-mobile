import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';
import Header from './../../components/Header';


export default function Skills() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;

    return (
        <View>
            <Header headerTitle='Ficha Técnica'/>
            <Card style={{padding: 30}}>
                <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 }}>{item.nome}</Card.Title>
                <Card.Divider/>
                <Card.Title>{item.alterEgo}</Card.Title>
                <Card.Image source={{uri:item.urlImagem}}>
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
                <View style={{marginTop: 20}}>
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