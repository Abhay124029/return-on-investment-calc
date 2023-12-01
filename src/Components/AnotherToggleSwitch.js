
import styles from "../Styles/ApyComp.module.css"
import { useCustomRoiContext } from "../RoiContext";


function AnotherToggleSwitch () {
    const {AnotherIsOn,AnotherHandleToggle} = useCustomRoiContext();
    return (
        <div className={styles.toggleSwitchContainer}>
        <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={AnotherIsOn} onChange={AnotherHandleToggle} />
          <span className={styles.slider}></span>
        </label>
      </div>
    )
}
    

export default AnotherToggleSwitch;
 
