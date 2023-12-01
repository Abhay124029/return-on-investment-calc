import styles from "../Styles/InputApy.module.css"
import { useCustomRoiContext } from "../RoiContext";
import InputApyButtons from "./InputApyButtons";

function InputWithButtons () {
    const {input2, setInput2,isOn,icon} = useCustomRoiContext();
    return (
        <>
        <h2 className={styles.heading}> ROI at Current Rates </h2>


        <div className={styles.inputWrapper}>
            <input className = {styles.inputField}
               type="number" 
               value = {input2}
               onChange={(e) => setInput2(e.target.value)
               }/>

               <label className={styles.inputCurrency}> {isOn ? "USD" : "CAKE"}</label>
               {icon ? <img className={styles.logoInput} src="/success.png" alt ="success-icon"/> :
               <img className={styles.logoInput} src ="/pencil.png" alt ="pencil-logo"/> }
               
     
        </div>

        <h2 className={styles.headingSmall}> ~ 0 {isOn ? "USD" : "CAKE"} + 0 DON </h2>

        <InputApyButtons/>


        </> 
    )
}

export default InputWithButtons;