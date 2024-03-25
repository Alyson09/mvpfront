import { View, Text, ScrollView, Image } from 'react-native'

export const VacancyDetailScreen = ({ route }) => {

    const detailInfoVancancy = route.params.infoVancancy
    const detailInfoCompany = route.params.infoCompany

    return (
        <ScrollView>
            <View>
                <View>
                    <Image
                        source={{ uri: detailInfoVancancy.banner }}
                        style={{ height: 146, width: 400 }}
                    />
                </View>
                <Text>{detailInfoVancancy.title}</Text>
            </View>
        </ScrollView>
    )
}
