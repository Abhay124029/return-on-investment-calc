import styles from "../Styles/InputApyButtons.module.css"
import { useCustomRoiContext } from "../RoiContext";

function InputApyButtons () {
    const {handleIcon, cancelIcon} = useCustomRoiContext()
    return (
        <>
        <div className={styles.inputButtonsContainer}>
            <button className={styles.applyButton} onClick={handleIcon}> Apply </button>
            <button className={styles.cancelButton} onClick ={cancelIcon}> Cancel </button>
        </div>
        </>
    )
}

export default InputApyButtons;