import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { FrameCompany } from '../components/FrameCompany'


export const VacancyDetailScreen = ({ route }) => {

    const detailInfoVancancy = route.params.infoVancancy
    const detailInfoCompany = route.params.infoCompany

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.bannerVancancyContainer}>
                    <Image
                        source={{ uri: detailInfoVancancy.banner }}
                        style={styles.image}
                    />
                </View>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{detailInfoVancancy.title}</Text>
            </View>
            </View>
            <FrameCompany detailInfoCompany={detailInfoCompany}/>
            <View style={styles.sectionContainer}>
                <Text style={styles.textTitle}>Descrição da vaga</Text>
                <View style={styles.sectionTextContainer}>
                    <Text  style={{ textAlign: 'justify' }}>{detailInfoVancancy.description}</Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.textTitle}>Requisitos</Text>
                <View style={styles.sectionTextContainer}>
                    <Text  style={{ textAlign: 'justify' }}>{detailInfoVancancy.requirements}</Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.textTitle}>Diferenciais</Text>
                <View style={styles.sectionTextContainer}>
                    <Text style={{ textAlign: 'justify' }}>{detailInfoVancancy.differential}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
        margin: 14,
    },
    headerContainer: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        margin: 14,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    bannerVancancyContainer: {
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
        marginTop: 10,
    },
    sectionContainer: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center'
    }
})