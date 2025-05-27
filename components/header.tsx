import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.back}>
            <Image style={styles.img} source={image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    back:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: '100%',
        height: 145
    }
})