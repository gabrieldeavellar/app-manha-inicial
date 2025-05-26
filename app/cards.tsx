import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Cards(){
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState('1')

    const fetchCharacters = async (pageNumber: string) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            const data = await response.json()
            setCharacters(data.results)
            console.log(data.results)
        } catch (error) {
            console.error("Erro ao buscar personagens:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacters(page)
    }, [page])
    
    
    const voltar = () => {
        router.push('/')
    }
    
    const renderItem = ({item} : any) => (
        <View>
            <Image source={{ uri: item.image }} style={styles.image}/>
        </View>
    )
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={voltar}>
                <Text style={styles.backBtn}>🔙</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Lista de Cards</Text>
            <Text style={styles.subtitle}>Personagens de Rick and Morty</Text>
            <Text style={styles.subtitle2}>Insira uma página - atual: {page}</Text>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="1/42" value={page} onChangeText={(value) => setPage(value)}/>
            <FlatList data={characters} renderItem={renderItem} keyExtractor={(item: any) => item.id.toString()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 16,
        backgroundColor: '#f0f8ff'
    },
    backBtn: {
        fontSize: 40,
        position: 'absolute',
        top: -30,
        left: -10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#06525f',
        textAlign: 'center'
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20
    },
    subtitle2:{
        fontSize: 12,
        textAlign: 'center',
        color: '#076a91'
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        marginBottom: 20,
        textAlign:'center',
        width: '50%',
        alignSelf: 'center'
    },
    image:{
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 999
    }
})