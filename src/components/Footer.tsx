

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <p>
              <span>React + ts todo</span> &copy; 2023
            </p>
        </footer>
    </div>
  )
}

export default Footer