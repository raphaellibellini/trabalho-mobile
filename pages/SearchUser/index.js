import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Button, Input, Icon, Card} from 'react-native-elements';
import Header from './../../components/Header';
import UserCard from '../../components/UserCard'
import Api from '../../service/api'
import axios from 'axios';


export default function SearchUser() {
    const navigation = useNavigation();
    const route = useRoute();
    const [searchText, setSearchText] = useState(null)
    const [list, setList] = useState(null);
    const [user, setUser] = useState(route.params.user)
    const [hero, setHero] = useState(route.params.item)

    function carregarDados(){
        setList(null)
        axios
            .get(Api.getUrl(`/usuario/buscar/${searchText}`))
            .then((response)=>{
                let data = response.data
                let i=1
                data.forEach(element => {
                    element.id = i
                    i++
                });
                console.log(data)
                setList(data);
            })
            .catch((err)=>{
                // setMessage("Usuário e/ou senha inválidos!")
                console.log(err);
            })
    }

    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
            <Header headerTitle='Home'/>
            <View style={{flexDirection: 'row', justifyContent:"center", marginHorizontal:30, marginTop: 20}}>
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
                    placeholder={"Digite o nome do usuário"}
                    defaultValue={searchText}
                    onChangeText={(searchText)=>{
                            setSearchText(searchText)
                            carregarDados()
                        }
                    }
                />
            </View>
            <FlatList
                data = {list}
                keyExtractor={item => String(item.id)} //para que cada elemento tenha uma chave unica
                showsVerticalScrollIndicator={false} //para ocultar a barrinha
                contentContainerStyle={{ paddingBottom: 260 }}
                renderItem={({item}) => (
                    <UserCard props={{hero, user, item}}></UserCard>
                )}
            />
        </View>
    )
}