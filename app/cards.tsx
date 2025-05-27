
import { Header } from "@/components/header";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Cards(){
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState('1')

    const fetchCharacters = async (pageNumber: string) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
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

    const renderStatusDot = (status : any) => {
        let color;
        switch (status) {
            case "Dead":
                color = "red"
                break;
            case "Alive":
                color = "green"
                break;
            default:
                color = "yellow"
        }
        return <View style={[styles.statusDot, {backgroundColor: color}]}/>
    }
    
    const renderItem = ({item} : any) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <View style={styles.cardInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.text}>Genero: {item.gender}</Text>
            <View style={styles.statusRow}>
                {renderStatusDot(item.status)}
                <Text style={styles.text}>{item.status}</Text>
            </View>
            </View>
        </View>
    )
    
    return(
        <>
        <Header image={require('@/assets/images/landscape2.webp')}/>
            {loading 
            ? 
           <Text style={styles.loadingText}>CAREEGANDO...</Text>
            :   
            <View style={styles.container}>
            <TouchableOpacity onPress={voltar}>
                <Text style={styles.backBtn}>🔙</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Lista de Cards</Text>
            <Text style={styles.subtitle}>Personagens de Rick and Morty</Text>
            <Text style={styles.subtitle2}>Insira uma página - atual: {page}</Text>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="1/42" value={page} onChangeText={(value) => setPage(value)}/>
            <FlatList data={characters} renderItem={renderItem} keyExtractor={(item: any) => item.id.toString()}/>
        </View>}
        </>
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
        width: 120,
        height: 120,
        marginRight: 10,
        borderRadius: 10,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 4
    },
    statusDot:{
        width: 15,
        height: 15,
        borderRadius: '100%'
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 15,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
    },
    cardInfo: {
        justifyContent: "center",
        flex: 1
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 3,
        color: '#06525f',
    },
    text: {
        fontSize: 16,
        color: '#555'
    },
    loadingText:{
        textAlign: 'center',
        fontSize: 30
    }
})
