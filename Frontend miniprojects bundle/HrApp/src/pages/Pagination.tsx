import { StyledLi, StyledUlPagination } from './Home/HomeStyles';

const Pagination = ({ postsPerPage, totalPosts, paginate }: { postsPerPage: number, totalPosts: number, paginate: (pageNumber: number) => void }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <StyledUlPagination className="pagination">
                {
                    pageNumbers.map(number => (
                        <StyledLi key={number} className="pageItem">
                            <span className='page-link' onClick={() => paginate(number)}>{number}</span>
                        </StyledLi>
                    ))
                }
            </StyledUlPagination>
        </nav>
    )
}

export default Pagination;