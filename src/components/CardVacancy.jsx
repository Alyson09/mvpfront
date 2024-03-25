import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import { COMPANIES } from '../data/mock-data'

export const CardVacancy = ({ infoVancancies }) => {

    const company = COMPANIES.find((company) => company.id === infoVancancies.id_company)

    return(

        
        <Pressable 
            style={styles.mainContainer}
            android_ripple={{ color: '#00000088"' }}
            //TODO
        >
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: infoVancancies.banner }}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{infoVancancies.title}</Text>
                <Text style={styles.textSubtitle}>{company.name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        backgroundColor: '#d8d8d8',
        overflow: 'hidden',
        paddingVertical: 15,
        paddingHorizontal: 15,
        margin: 14,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    image: {
        height: 150,
        width: 400
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4E4E4E'
    },
    textSubtitle: {
        fontWeight: 'bold', 
        color: '#797979'
    },
    textContainer: {
        marginTop: 10
    }
})