import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar } from 'recharts';
import { Person } from '../Interfaces/Person';
import { RootState } from '../ReduxParts/store/store';
import { useSelector } from 'react-redux';

export default function AverageAge() {
    const data: Person[] = useSelector((state: RootState) => state.people.people)

    const calculateAge = (dob: string): number => {
        const dateArray = dob.split("/");
        const newDate = dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2];
        const birthDate = new Date(newDate);
        const today = new Date();

        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();


        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) { /// eg: a person born in october and we're in september
            return age - 1;
        }
        return age;
    };


    const groupByIndustry = (data: Person[]): Record<string, { totalAge: number; count: number }> => {
        return data.reduce((groups, person) => {
            const industry = person.industry;
            const age = calculateAge(person.date_of_birth);

            if (!groups[industry]) {
                groups[industry] = { totalAge: 0, count: 0 };
            }

            groups[industry].totalAge += age || 0;
            groups[industry].count += 1;

            return groups;
        }, {} as Record<string, { totalAge: number; count: number }>);
    };

    const groupedData = groupByIndustry(data);

    const averageAgeByIndustry: { industry: string; averageAge: number }[] = Object.keys(groupedData).map((industry: string) => ({
        industry,
        averageAge: groupedData[industry].totalAge / groupedData[industry].count,
    }));

    return (
        <>
            <BarChart width={600} height={400} data={averageAgeByIndustry} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="industry" /> 
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" />
                <Bar dataKey="averageAge" fill="#8884d8" name="Average age per industry" />
            </BarChart>
        </>
    );
}

