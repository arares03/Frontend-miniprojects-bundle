import { Person } from '../../Interfaces/Person'
import { StyledUl } from '../Home/HomeStyles'

const People = ({ peopleArray, loading, onPersonClick }: { peopleArray: Person[], loading: boolean, onPersonClick: (person: Person) => void }) => {
    if (loading) {
        return <h2>Loading..</h2>
    }

    return (
        <StyledUl>
            {
                peopleArray.map((person, index) => (
                    <li key={index}>{person.first_name} - {person.last_name}
                        <button onClick={() => onPersonClick(person)}>Click me!</button></li>
                ))
            }
        </StyledUl >)
}

export default People;