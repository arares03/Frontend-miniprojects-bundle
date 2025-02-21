/// SA FOLOSESTI THEMES IN STYLED COMPONENT!
import Navbar from '../NavBar/Navbar'
import { RootState } from '../../ReduxParts/store/store'
import { useSelector } from 'react-redux'
import { Person } from '../../Interfaces/Person'
import { StyledHomeContainer } from './HomeStyles'
import { useState } from 'react'
import People from '../Posts/Posts'
import Pagination from '../Pagination'
import { StyledPeopleContainer } from './HomeStyles'
import ElementContainer from './ElementContainer'

export function Home() {
  const peopleArray: Person[] = useSelector((state: RootState) => state.people.people)
 
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  
  const [currentPerson, setCurrentPerson] = useState({
    id: -1,
    first_name: "string",
    last_name: "string",
    email: "string",
    date_of_birth: "string",
    industry: "string",
    salary: -1,
    years_of_experience: 0
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: Person[] = peopleArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const handlePersonClick = (person: Person) => setCurrentPerson(person);

  return (
    <>
      <Navbar />
      <StyledHomeContainer>
        <StyledPeopleContainer>   <People peopleArray={currentPosts} loading={loading} onPersonClick={handlePersonClick} />
          <Pagination postsPerPage={postsPerPage} totalPosts={peopleArray.length} paginate={paginate} />
        </StyledPeopleContainer>
        <ElementContainer person={currentPerson}  />
      </StyledHomeContainer>
    </>
  )
}
