import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Button, Input, Icon, Card} from 'react-native-elements';
import Header from './../../components/Header';
import logoImg from './../../logos/logo.png';

export default function Register() {
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToHome(){
        navigation.navigate("Home")
    }

    return (
        <View style={{backgroundColor: '#EFEEF5', marginTop: 100}}>
            <Image
                source={logoImg}
                style={{justifyContent:'center', marginHorizontal:70, marginBottom: 30}}
            ></Image>
            <Card style={{}}>
                <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 }}>Cadastro</Card.Title>
                <Card.Divider/>
                <Input
                    containerStyle={{}}
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={{ }}
                    errorStyle={{}}
                    errorProps={{}}
                    inputStyle={{}}
                    label=""
                    labelStyle={{color: '#2288DD'}}
                    labelProps={{}}
                    placeholder={"Nome completo"}
                    placeholderTextColor={'#2288DD'}
                ></Input>
                <Input
                    containerStyle={{}}
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={{ }}
                    errorStyle={{}}
                    errorProps={{}}
                    inputStyle={{}}
                    label=""
                    labelStyle={{color: '#2288DD'}}
                    labelProps={{}}
                    placeholder={"Email"}
                    placeholderTextColor={'#2288DD'}
                ></Input>
                <Input
                    containerStyle={{}}
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={{ }}
                    errorStyle={{}}
                    errorProps={{}}
                    inputStyle={{}}
                    label=""
                    labelStyle={{color: '#2288DD'}}
                    labelProps={{}}
                    placeholder={"Senha"}
                    placeholderTextColor={'#2288DD'}
                ></Input>
                <Button
                    buttonStyle={{marginTop: 10, marginLeft:10, marginRight:10}}
                    onPress={() => navigateToHome()}
                    title='Salvar' />

                <Button
                    buttonStyle={{marginTop: 10, marginLeft:10, marginRight:10}}
                    onPress={() => navigation.goBack()}
                    type={"outline"}
                    title='Voltar' />
            </Card>

        </View>
    )
}