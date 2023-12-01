import styles from "../Styles/InputWithToggle.module.css"
import { useCustomRoiContext } from "../RoiContext";
import ToggleSwitch from "./ToggleSwitch";


function Input () {
    const {isOn,input,handleButtonClick,setInput} = useCustomRoiContext();
     
    return (
        <>
         <div className={styles.switchContainer}>
             <div className="cakeIcon">
             <img src ="./cake.png" alt ="cake-icon"/>
             </div>
        <div className="cake">
            <span className={styles.heading}> Cake </span>
        </div>

      <ToggleSwitch/>

        <div className="usd">
            <span className={styles.heading}> USD </span>
        </div>
        </div>


        {/* Input Field*/}

        <div className={styles.inputWrapper}>
            <input className = {styles.inputField}
               type="number" 
               value = {input}
               onChange={(e) => setInput(e.target.value)
               }/>

               <label className={styles.inputCurrency}> {isOn ? "USD" : "CAKE"}</label>
     
        </div>

        <div className={styles.currencyToggled}>
            <span>{isOn ? "~ USD" : "~ CAKE"}  {input}</span>
        </div>

         {/* Input Field End*/}

         {/* Buttons*/}

         <div className={styles.buttons}>
            <button className={styles.inputButtons} > Use Balance </button>
            <button className={styles.inputButtons} onClick = {() => handleButtonClick(1000)}> {isOn ? "$" : ""} 1000 </button>
            <button className={styles.inputButtons} onClick = {() => handleButtonClick(500)}> {isOn ? "$" : ""} 500 </button>
         </div>
        
        </>
    )
}

export default Input;