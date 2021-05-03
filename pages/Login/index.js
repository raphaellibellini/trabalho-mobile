import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Button, Input, Icon, Card} from 'react-native-elements';
import Header from './../../components/Header';


export default function Login() {
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToRegister(){
        navigation.navigate('Register')
    }

    function navigateToHome(){
        navigation.navigate("Home")
    }

    return (
        <View style={{backgroundColor: '#EFEEF5', marginTop: 100}}>

            <Card style={{}}>
                <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 }}>Login</Card.Title>
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
                    title='Entrar' />
                <Text
                    style={{paddingHorizontal:15, marginTop: 15}}
                >Ainda não tem uma conta?
                    <Text
                        style={{color:"#2288DD"}}
                        onPress={()=>{navigateToRegister()}}
                    > Cadastre-se
                    </Text>
                </Text>
            </Card>

        </View>
    )
}