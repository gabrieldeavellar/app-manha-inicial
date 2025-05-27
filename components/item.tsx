import { Image } from 'expo-image'
import { StyleSheet, Text, View } from "react-native"

export const Item = ({ name, age, date, image }: { name: string, age: string, date: string, image: string }) => {
    return (
        <View style={styles.itemList}>
            <Image style={styles.imageStyle} source={image} />
            <Text style={styles.txt}>{name}</Text>
            <Text style={styles.txt2}>Idade: {age}</Text>
            <Text style={styles.txt3}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#4186a4d4',
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageStyle: {
        width: 70,
        height: 70,
        zIndex: 999,
        borderRadius: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    txt2: {
        color: '#093753c3',
        fontSize: 14,
        fontWeight: 'bold'
    },
    txt3: {
        color: '#efad50',
        fontSize: 14,
        fontWeight: 'bold'
    }
})