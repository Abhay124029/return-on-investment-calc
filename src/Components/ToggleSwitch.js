
import styles from "../Styles/InputWithToggle.module.css"
import { useCustomRoiContext } from "../RoiContext";


function ToggleSwitch () {
    const {isOn,handleToggle} = useCustomRoiContext();
    return (
        <div className={styles.toggleSwitchContainer}>
        <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={isOn} onChange={handleToggle} />
          <span className={styles.slider}></span>
        </label>
      </div>
    )
}
    

export default ToggleSwitch;
 
