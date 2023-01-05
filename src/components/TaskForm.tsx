
import styles from './TasksForm.module.css';

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <div>
        <form className={styles.form}>
            <div className={styles.input_container} >
                <label htmlFor="title">Titulo:</label>
                <input type="text" name="title" placeholder="titulo da tarefa" />
            </div>
            <div className={styles.input_container} >
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
            </div>
            <input type="submit" value={btnText} />
        </form>
    </div>
  )
}

export default TaskForm