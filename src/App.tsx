//css
import { useState } from 'react';
import styles from './App.module.css';


//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interface
import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number)=>{
    setTaskList(
      taskList.filter(task=>{
        return task.id !== id
      })
    )
  }

  return (
    <div className="App">
      <div>
       
        <Header/>
        <main className={styles.main}>
            <div>
              <h2>O que vc vai fazer?</h2>
              <TaskForm btnText='Criar tarefas' taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <div>
              <h2>Suas tarefas:</h2>
              <TaskList taskList={taskList} handleDelete={deleteTask}/>
            </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
