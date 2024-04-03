import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import { COMPANIES } from '../data/mock-data'
import { useNavigation } from '@react-navigation/native'

export const CardVacancy = ({ infoVancancies }) => {

    const navigation = useNavigation()

    const company  = COMPANIES.find((company) => company.id === infoVancancies.id_company)

    const goToDetailPage = () => {
        navigation.navigate('VacancyDetailScreen', {
            infoVancancy: infoVancancies,
            infoCompany: company
        })
    }

    return(
        <Pressable 
            style={styles.mainContainer}
            android_ripple={{ color: '#00000088' }}
            onPress={goToDetailPage}
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
        backgroundColor: '#ffffff',
        padding: 15,
        margin: 14,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    image: {
        height: 200,
        width: 400,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4E4E4E',
    },
    textSubtitle: {
        fontWeight: 'bold', 
        color: '#797979'
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center'
    }
})