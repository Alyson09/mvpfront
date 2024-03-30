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
            <View style={styles.bannerAndTextContainer}>
                <View style={styles.bannerCompanyContainer}>
                    <Image
                        source={{ uri: detailInfoCompany.banner }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textSubtitle}>{detailInfoCompany.name}</Text>
                </View>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    infoCopanyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    bannerAndTextContainer: {
        alignItems: 'center',
    },
    bannerCompanyContainer: {
        overflow: 'hidden',
        padding: 6,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    textContainer: {
        alignItems: 'center',
    },
    textSubtitle: {
        fontWeight: 'bold', 
        color: '#797979',
        textAlign: 'center',
    },
    image: {
        height: 100,
        width: 100,
    }
});

