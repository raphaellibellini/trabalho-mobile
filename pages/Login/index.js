import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Button, Input, Icon, Card} from 'react-native-elements';
import Header from './../../components/Header';
import logoImg from './../../logos/logo.png';
import Api from '../../service/api'
import axios from 'axios';

export default function Login() {
    const navigation = useNavigation();
    const route = useRoute();
    const [message, setMessage] = React.useState("")
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    function navigateToRegister(){
        navigation.navigate('Register')
    }

    function navigateToHome(user){
        navigation.navigate("Home", {user})
    }

    function login(){
        axios
            .post(Api.getUrl('/usuario/logar'),
            {
                email: email,
                senha: password
            })
            .then((response)=>{
                let data = {
                    id: response.data.id,
                    nome: response.data.nome,
                    usuario: response.data.usuario
                };
                navigateToHome(data);
            })
            .catch((err)=>{
                setMessage("Usuário e/ou senha inválidos!")
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
                    placeholder={"Senha"}
                    secureTextEntry={true}
                    defaultValue={password}
                    onChangeText={(password)=>setPassword(password)}
                ></Input>
                <Button
                    buttonStyle={{marginTop: 10, marginLeft:10, marginRight:10}}
                    onPress={() => login()}
                    title='Entrar' />
                <Text
                    style={{paddingHorizontal:15, marginTop: 15, color:"red"}}
                >{message}
                </Text>
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