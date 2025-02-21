import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Person } from '../Interfaces/Person';
import { RootState } from '../ReduxParts/store/store';
import { useSelector } from 'react-redux';

export default function AverageSalaryPerYear() {
    const data: Person[] = useSelector((state: RootState) => state.people.people)

    const groupByYearsOfExperience = (data: Person[]): Record<string, { salary: number; count: number }> => {
        return data.reduce((groups, person) => {
            const yoe = Math.round(person.years_of_experience);
            const yearsOfExperience = String(yoe); 
            const salary = person.salary;
            
            if (!groups[yearsOfExperience]) {
                groups[yearsOfExperience] = { salary: 0, count: 0 };
            }

            groups[yearsOfExperience].salary += salary || 0;
            groups[yearsOfExperience].count += 1;

            return groups;
        }, {} as Record<string, { salary: number; count: number }>);
    };
    const groupedData = groupByYearsOfExperience(data);

    const averageSalaryByYOE: { yearsOfExperience: string; averageSalary: number }[] = Object.keys(groupedData).map((yearsOfExperience: string) => ({
        yearsOfExperience,
        averageSalary: groupedData[yearsOfExperience].salary / groupedData[yearsOfExperience].count,
    }));

    return (
        <>
            <AreaChart width={600} height={400} data={averageSalaryByYOE} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="5 0" />
                <XAxis dataKey="yearsOfExperience" type="category"/>
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" />
                <Area dataKey="averageSalary" fill="hsl(138.67924528301887, 54.08163265306122%, 61.568627450980394%)" name={"Average salary per year"} />
            </AreaChart>
            
        </>
    );
}

