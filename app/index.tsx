import { Header } from '@/components/header'
import { router } from 'expo-router'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomePage() {

    // const onPress = () => {
    //     router.push('/cards')
    // }

    return (
        <SafeAreaView style={styles.wrap}>
            <Header image={require('@/assets/images/ld.jpg')} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.wrap}>
                <View style={styles.body}>
                    <Text style={styles.title}>Tela Inicial</Text>
                    <Text style={styles.paragraph}>Meu primeiro app usando react-native e expo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis totam consequuntur consequatur corrupti ratione ducimus ex ad, quaerat, porro accusamus rem animi quibusdam nisi iure unde dolor earum voluptate?</Text>
                </View>
                <View style={styles.body}>
                    <Image style={styles.img} source={require("../assets/images/react-logo.png")} />
                </View>
                <Text style={styles.center}>CLIQUE NOS BOTOES ABAIXO PARA IR PARA PAGINA DE CARDS</Text>
                <View>
                    {/* <Link style={styles.button} href={'/cards'}>
                        <Text style={styles.btnText}>CARDS</Text>
                    </Link> */}
                     <TouchableOpacity style={styles.button} onPress={() => router.push('/list')} >
                        <Text style={styles.btnText}>LIST - MOCK</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/cards')} >
                        <Text style={styles.btnText}>CARDS - API</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#090909',
    },
    body: {
        backgroundColor: '#090909',
        gap: 25,
        paddingBottom: 50
    },
    title: {
        color: '#19adc7',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 700,
        backgroundColor: '#ffffff',
        padding: 20
    },
    paragraph: {
        color: '#ffffff',
        paddingHorizontal: 20,
    },
    img: {
        alignSelf: 'center',
    },
    center: {
        color: '#06525f',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        padding: 25,
        backgroundColor: ' #ffffff',
        paddingHorizontal: 50,
        marginBottom: 30
    },
    button: {
        backgroundColor: '#06525f',
        width: 200,
        height: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    btnText: {
        color:  '#ffffff',
        fontWeight: 'bold'
    }
})