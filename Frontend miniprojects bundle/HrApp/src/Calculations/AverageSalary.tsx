import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, } from 'recharts';
import { Person } from '../Interfaces/Person';
import { RootState } from '../ReduxParts/store/store';
import { useSelector } from 'react-redux';

export default function AverageSalary() {
    const data: Person[] = useSelector((state: RootState) => state.people.people)

    const groupByIndustry = (data: Person[]): Record<string, { salary: number; count: number }> => {
        return data.reduce((groups, person) => {
            const industry = person.industry;
            const salary = person.salary;
            if (!groups[industry]) {
                groups[industry] = { salary: 0, count: 0 };
            }

            groups[industry].salary += salary || 0;
            groups[industry].count += 1;

            return groups;
        }, {} as Record<string, { salary: number; count: number }>);
    };

    const groupedData = groupByIndustry(data);

    const averageSalaryByIndustry: { industry: string; averageSalary: number }[] = Object.keys(groupedData).map((industry: string) => ({
        industry,
        averageSalary: groupedData[industry].salary / groupedData[industry].count,
    }));

    return (
        <>
            <LineChart width={600} height={400} data={averageSalaryByIndustry} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="industry" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" />
                <Line dataKey="averageSalary" fill="#8884d8" name={"Average salary for industry"} />
            </LineChart>
        </>
    );
}

