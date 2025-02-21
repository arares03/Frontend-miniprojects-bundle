import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import ViewCharts from './pages/ViewCharts'
import { useEffect } from 'react'
import { importPeople } from './ReduxParts/actions/PeopleActions'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Person } from './Interfaces/Person'
import { ThemeProvider } from 'styled-components'
import { theme } from './pages/Home/Themes'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {

      axios
        .get('MOCK_DATA.json')
        .then((response: { data: Person[] }) => {
          const data = response.data;
          dispatch(importPeople(data));
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
          console.error("Error:", error);
          dispatch(importPeople([]));
        });
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme ={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/view-charts' element={<ViewCharts />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

