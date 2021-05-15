import React from 'react';
import {Image, Text, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Button, Input, Icon, Card} from 'react-native-elements';
import logoImg from './../../logos/logo.png';
import Api from '../../service/api'
import axios from 'axios';

export default function Register() {
    const navigation = useNavigation();
    const route = useRoute();
    const [message, setMessage] = React.useState("")
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")

    function navigateToLogin(){
        navigation.navigate("Login")
    }

    function cadastrar(){
        axios
            .post(Api.getUrl('/usuario/cadastrar'),
            {
                email: email,
                senha: password,
                nomeCompleto: name,
                nomeUsuario: userName
            })
            .then(()=>{
                navigateToLogin();
            })
            .catch((err)=>{
                setMessage("Usuário e/ou email já existentes!")
                console.log(err);
            })
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
                    defaultValue={name}
                    onChangeText={(name)=>setName(name)}
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
                    defaultValue={email}
                    onChangeText={(email)=>setEmail(email)}
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
                    placeholder={"Nome de usuário"}
                    defaultValue={userName}
                    onChangeText={(userName)=>setUserName(userName)}
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
                    defaultValue={password}
                    onChangeText={(password)=>setPassword(password)}
                ></Input>
                <Text
                    style={{paddingHorizontal:15, marginTop: 15, color:"red"}}
                >{message}
                </Text>
                <Button
                    buttonStyle={{marginTop: 10, marginLeft:10, marginRight:10}}
                    onPress={() => cadastrar()}
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