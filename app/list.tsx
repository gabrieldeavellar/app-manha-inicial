import { Header } from '@/components/header'
import { Item } from '@/components/item'
import data from '@/constants/mock'
import { router } from 'expo-router'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function List() {

    const voltar = () => {
        router.push('/')
    }

    return (
        <>
            <Header image={require('@/assets/images/landscape.jpg')}/>
            <View style={styles.center}>
                <TouchableOpacity onPress={voltar}>
                    <Text style={styles.backBtn}>🔙</Text>
                </TouchableOpacity>
                <Text>LISTA</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList data={data} renderItem={({ item }) => (
                    <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem} />
                )}>
                </FlatList>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    center: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        zIndex: 800,
        position: 'relative'
    },
    container: {
        flex: 1
    },
    backBtn: {
        fontSize: 40,
        position: 'absolute',
        top: -20,
        left: -200,
        zIndex: 999
    },
})