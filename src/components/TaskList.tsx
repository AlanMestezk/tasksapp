

import styles from './TaskList.module.css';

//iterfaces
import { ITask } from '../interfaces/ITask'

type Props = {
  taskList: ITask[];
  handleDelete(id: Number): void;
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
        {taskList.length > 0 ? (
          taskList.map((task)=>(

            <div key={task.id} className={styles.task}>

              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>

              <div className={styles.actions}>

                
                <abbr title="Excluir tarefa"><i className='bi bi-trash' 
                onClick={()=>{handleDelete(task.id)}}></i></abbr>

              </div>
            </div>

          ))
        ):(
          <p>Não existe tarefas cadastradas</p>
        )}
    </>
  )
}

export default TaskList