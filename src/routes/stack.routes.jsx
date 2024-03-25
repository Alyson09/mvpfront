import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VacancyListScreen } from '../screens/VacancyListScreen'
import { VacancyDetailScreen } from '../screens/VacancyDetailScreen'
import { CompanyDetailScreen } from '../screens/CompanyDetailScreen'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="VacancyListScreen"
                component={VacancyListScreen}
                options={{
                    title: 'Feed'
                }}
            />
            <Stack.Screen
                name="VacancyDetailScreen"
                component={VacancyDetailScreen}
                options={{
                    title: 'Vaga'
                }}
            />
            <Stack.Screen
                name="CompanyDetailScreen"
                component={CompanyDetailScreen}
            />
        </Stack.Navigator>
    )
}