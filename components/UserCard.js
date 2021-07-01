import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {Button, Card, Icon} from "react-native-elements";
import {useNavigation, useRoute} from "@react-navigation/native";
import axios from 'axios';
import Api from '../service/api';

export default function UserCard({ props }) {

    const navigation = useNavigation();
    const route = useRoute();

    const [user] = useState(props.user)
    const [hero] = useState(props.hero)
    const [userReceive] = useState(props.item)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if(user.nome == userReceive.nome){
            setDisabled(true);
        }
    },[]);

    function navigateToHome(user) {
        navigation.navigate('Home', { user });
    }


    function compartilhar() {
        axios
            .post(Api.getUrl('/compartilhamento/compartilhar'),
                {
                    usuarioEnvioId: user.id,
                    usuarioRecebimentoNome: userReceive.usuario,
                    idHeroiApi: hero.idApi
                })
            .then(()=>{
                Alert.alert(
                    "Compartilhado.",
                    "Herói compartilhado com sucesso.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                )
                navigateToHome();
            })
            .catch((err)=>{
                Alert.alert(
                    "Não compartilhado.",
                    "Não foi possível compartilhar herói.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                )
                console.log(err);
            })
    }

    return (
        <View >
            <Card style={{ padding: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Card.Title style={{ color: '#2288DD', fontWeight: 'bold', fontSize: 13, marginLeft: 8, marginBottom: 0 }}>{`${userReceive.nome} @${userReceive.usuario}`}</Card.Title>
                    <Button
                        buttonStyle={{ borderColor: 'white' }}
                        titleStyle={{}}
                        title={""}
                        type={"outline"}
                        onPress={()=> compartilhar()}
                        icon={<Icon name="send" size={25} color="#2288DD" />}
                        disabled={disabled}
                        disabledStyle={{backgroundColor:"#696969"}}
                    />
                </View>
            </Card>
        </View>
    )
}