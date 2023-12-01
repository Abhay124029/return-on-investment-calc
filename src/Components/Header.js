import styles from "../Styles/Header.module.css"


function Header () {
    return (
        <>
        <div className={styles.headerContainer}>
        <div className="title">
        <h2 className={styles.headerTitle}> ROI Calculator </h2>
        </div>
        <div className="close-button">
           <img className={styles.crossButton} src="/crossIcon.png" alt ="cross-button"/>
        </div>
        </div>
  
        </>
    )
}

export default Header;