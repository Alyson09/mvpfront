import { ScrollView } from 'react-native'
import { CardVacancy } from './CardVacancy'
import { VACANCIES } from '../data/mock-data'

export const FeedVancacies = () => {

    const printVancancies = VACANCIES.map((vacancy) => (
        <CardVacancy 
            infoVancancies={vacancy}
            key={vacancy.id}
        />
    ))

    return(
        <ScrollView>
            {printVancancies}
        </ScrollView>
    )
}