import React, {useState} from 'react';
import { View, Alert } from 'react-native';
import Constants from 'expo-constants';
import {Button, Card, Icon} from "react-native-elements";
import {useNavigation, useRoute} from "@react-navigation/native";
import axios from 'axios';
import Api from '../service/api';
import If from '../components/If';

export default function SimpleCard({props}) {

    const navigation = useNavigation();
    const route = useRoute();

    const [user, setUser] = useState(props.user)
    const [item, setItem] = useState(props.item)

    function navigateToSkills(item){
        navigation.navigate('Skills', { item });
    }

    function favoritar(id){
        axios.post(Api.getUrl(`/favoritos/favoritar`), 
            {
                usuarioId: user.id,
                idHeroiApi: item.idApi
            }
        ).then((response) => {console.log(response)
            response.data ? Alert.alert(
                "Salvo em Favoritos",
                "Herói salvo com sucesso nos favoritos",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              ) : Alert.alert(
                "Erro ao salvar",
                "Erro ao salvar herói nos favoritos",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              )
        })
        .catch((err) => Alert.alert(
            "Erro ao salvar",
            "Erro ao salvar herói nos favoritos",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          ));
    }

    return (
        <View >
            <Card style={{padding: 30}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Card.Title style={{color: '#2288DD', fontWeight: 'bold', fontSize:20 , marginLeft:8, marginBottom: 0}}>{item.nome}</Card.Title>
                    <Button
                        buttonStyle={{borderColor:'white'}}
                        titleStyle={{}}
                        title={""}
                        type={"outline"}
                        //onPress={}
                        icon={<Icon name="share" size={25} color="#2288DD" />}
                    />
                </View>
                <Card.Divider/>
                <Card.Title style={{marginLeft:8, textAlign: 'left'}}>{item.alterEgo}</Card.Title>
                <Card.Image style={{height:300}} source={{uri:item.urlImagem}}>
                </Card.Image>
                <View style={{marginTop: 16 , flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button
                        buttonStyle={{paddingHorizontal: 24}}
                        onPress={() => navigateToSkills(item)}
                        type= "outline"
                        title='Ficha Técnica' />
                    <If condition={route.name === 'Favorites'}>
                        <Button
                            buttonStyle={{paddingHorizontal: 48, marginLeft:6}}
                            title='Excluir'
                            //onPress={() => excluir()} 
                            />
                    </If>
                    <If condition={route.name !== 'Favorites'}>
                        <Button
                            buttonStyle={{paddingHorizontal: 32}}
                            title='Favoritar'
                            onPress={() => favoritar(item.id)} 
                            />
                    </If>
                </View>
            </Card>
        </View>
    )
}