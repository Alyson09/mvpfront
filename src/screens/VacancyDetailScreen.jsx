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
                        style={{ height: 146, width: 400 }}
                    />
                </View>
                <Text style={styles.textTitle}>{detailInfoVancancy.title}</Text>
            </View>
            <FrameCompany detailInfoCompany={detailInfoCompany}/>
            <View style={styles.sectionContainer}>
                <Text style={styles.textTitle}>Requisitos</Text>
                <View style={styles.sectionTextContainer}>
                    <Text  style={{ textAlign: 'justify' }}>{detailInfoVancancy.requirements}</Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.textTitle}>Diferenciais</Text>
                <View style={{ padding: 8 }}>
                    <Text style={{ textAlign: 'justify' }}>{detailInfoVancancy.differential}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15
    },
    headerContainer: {
        backgroundColor: '#d8d8d8',
        padding: 16,
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
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4E4E4E',
        marginTop: 10 
    },
    sectionContainer: {
        backgroundColor: '#d8d8d8',
        paddingHorizontal: 14,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginBottom: 30
    }
})