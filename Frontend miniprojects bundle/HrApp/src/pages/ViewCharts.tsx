import Navbar from './NavBar/Navbar';
import AverageAge from '../Calculations/AverageAge';
import AverageSalary from '../Calculations/AverageSalary';
import AverageSalaryPerYear from '../Calculations/AverageSalaryPerYears';
import { StyledChartsContainer } from './Home/HomeStyles';
export default function ViewCharts() {

  return (
    <>
      <Navbar />
      <StyledChartsContainer>
        <AverageAge />
        <AverageSalary />
        <AverageSalaryPerYear />
      </StyledChartsContainer>
    </>
  );
}