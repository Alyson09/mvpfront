import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const FrameCompany = ({ detailInfoCompany }) => {
    
    const navigation = useNavigation()
 
    const goToDetailPageCompany = () => {
        navigation.navigate('CompanyDetailScreen', {
            infoCompany: detailInfoCompany
        })
    }

    return(
        <Pressable 
            style={styles.infoCopanyContainer}
            android_ripple={{ color: '#00000088"' }}
            onPress={goToDetailPageCompany}
        >
            <View style={styles.bannerCompanyContainer}>
                <Image
                    source={{ uri: detailInfoCompany.banner }}
                    style={{ height: 70, width: 90 }}
                />
            </View>
            <View style={{ marginLeft: 14 }}>
                <Text style={styles.textSubtitle}>{detailInfoCompany.name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    infoCopanyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10

    },
    bannerCompanyContainer: {
        overflow: 'hidden',
        backgroundColor: '#d8d8d8',
        padding: 6,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    textSubtitle: {
        fontWeight: 'bold', 
        color: '#797979'
    }
})