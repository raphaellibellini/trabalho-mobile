import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './../../components/Header';
import SimpleCard from "../../components/SimpleCard";

export default function Favorites() {
    const navigation = useNavigation();

    function navigateToSkills(item) {
        navigation.navigate('Skills', { item });
    }

    return (
        <View style={{backgroundColor: '#EFEEF5'}}>
            <Header headerTitle='Meus Favoritos'/>
            <FlatList
                data={[
                    {
                        "id": null,
                        "idApi": "63",
                        "nome": "Batgirl",
                        "alterEgo": "Barbara Gordon",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg",
                        "altura": "170 cm",
                        "peso": "57 kg",
                        "inteligencia": "88",
                        "forca": "11",
                        "velocidade": "33",
                        "resistencia": "40",
                        "poder": "34",
                        "combate": "90"
                    },
                    {
                        "id": null,
                        "idApi": "64",
                        "nome": "Batgirl",
                        "alterEgo": "Mary Elizabeth Kane",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/638.jpg",
                        "altura": "0 cm",
                        "peso": "0 kg",
                        "inteligencia": "null",
                        "forca": "27",
                        "velocidade": "null",
                        "resistencia": "null",
                        "poder": "null",
                        "combate": "null"
                    },
                    {
                        "id": null,
                        "idApi": "65",
                        "nome": "Batgirl III",
                        "alterEgo": "Helena Rosa Bertinelli",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/1112.jpg",
                        "altura": "0 cm",
                        "peso": "0 kg",
                        "inteligencia": "null",
                        "forca": "43",
                        "velocidade": "null",
                        "resistencia": "null",
                        "poder": "null",
                        "combate": "null"
                    },
                    {
                        "id": null,
                        "idApi": "66",
                        "nome": "Batgirl IV",
                        "alterEgo": "Cassandra Cain",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/1113.jpg",
                        "altura": "165 cm",
                        "peso": "52 kg",
                        "inteligencia": "69",
                        "forca": "12",
                        "velocidade": "27",
                        "resistencia": "56",
                        "poder": "46",
                        "combate": "100"
                    },
                    {
                        "id": null,
                        "idApi": "67",
                        "nome": "Batgirl V",
                        "alterEgo": "Charlotte Gage-Radcliffe",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/1115.jpg",
                        "altura": "0 cm",
                        "peso": "0 kg",
                        "inteligencia": "null",
                        "forca": "null",
                        "velocidade": "null",
                        "resistencia": "null",
                        "poder": "null",
                        "combate": "null"
                    },
                    {
                        "id": null,
                        "idApi": "68",
                        "nome": "Batgirl VI",
                        "alterEgo": "Stephanie Brown",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/1398.jpg",
                        "altura": "168 cm",
                        "peso": "61 kg",
                        "inteligencia": "75",
                        "forca": "10",
                        "velocidade": "23",
                        "resistencia": "28",
                        "poder": "22",
                        "combate": "80"
                    },
                    {
                        "id": null,
                        "idApi": "69",
                        "nome": "Batman",
                        "alterEgo": "Terry McGinnis",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
                        "altura": "178 cm",
                        "peso": "77 kg",
                        "inteligencia": "81",
                        "forca": "40",
                        "velocidade": "29",
                        "resistencia": "55",
                        "poder": "63",
                        "combate": "90"
                    },
                    {
                        "id": null,
                        "idApi": "70",
                        "nome": "Batman",
                        "alterEgo": "Bruce Wayne",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
                        "altura": "188 cm",
                        "peso": "95 kg",
                        "inteligencia": "100",
                        "forca": "26",
                        "velocidade": "27",
                        "resistencia": "50",
                        "poder": "47",
                        "combate": "100"
                    },
                    {
                        "id": null,
                        "idApi": "71",
                        "nome": "Batman II",
                        "alterEgo": "Dick Grayson",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg",
                        "altura": "178 cm",
                        "peso": "79 kg",
                        "inteligencia": "88",
                        "forca": "11",
                        "velocidade": "33",
                        "resistencia": "28",
                        "poder": "36",
                        "combate": "100"
                    },
                    {
                        "id": null,
                        "idApi": "72",
                        "nome": "Battlestar",
                        "alterEgo": "Lemar Hoskins",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/231.jpg",
                        "altura": "198 cm",
                        "peso": "133 kg",
                        "inteligencia": "50",
                        "forca": "53",
                        "velocidade": "35",
                        "resistencia": "74",
                        "poder": "48",
                        "combate": "74"
                    },
                    {
                        "id": null,
                        "idApi": "73",
                        "nome": "Batwoman V",
                        "alterEgo": "Katherine Rebecca Kane",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/10234.jpg",
                        "altura": "178 cm",
                        "peso": "0 kg",
                        "inteligencia": "81",
                        "forca": "8",
                        "velocidade": "29",
                        "resistencia": "25",
                        "poder": "27",
                        "combate": "80"
                    },
                    {
                        "id": null,
                        "idApi": "427",
                        "nome": "Man-Bat",
                        "alterEgo": "Robert Kirkland Langstrom",
                        "urlImagem": "https://www.superherodb.com/pictures2/portraits/10/100/731.jpg",
                        "altura": "0 cm",
                        "peso": "0 kg",
                        "inteligencia": "38",
                        "forca": "18",
                        "velocidade": "50",
                        "resistencia": "70",
                        "poder": "33",
                        "combate": "30"
                    }
                ]}
                keyExtractor={item => String(item.id)} //para que cada elemento tenha uma chave unica
                showsVerticalScrollIndicator={false} //para ocultar a barrinha
                contentContainerStyle={{ paddingBottom: 120 }}
                renderItem={({item}) => (
                    <SimpleCard props={item}></SimpleCard>
                )}
            />
        </View>
    );
}
