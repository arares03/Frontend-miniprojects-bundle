import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            name : 'test1',
            number : 23
        },
        {
            name : 'test2',
            number : 33
        },
        {
            name : 'test4',
            number : 45
        },
    ]
 )

  return (
    <div className="container">
      <Header title = {"Task Tracker"}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
