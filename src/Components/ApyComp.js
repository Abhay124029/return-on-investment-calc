import style from "../Styles/ApyComp.module.css"
import { useCustomRoiContext } from "../RoiContext";
import AnotherToggleSwitch from "./AnotherToggleSwitch";



const ApyComp = () => {
    const {buttonClick2, activeButton2} = useCustomRoiContext();
 
  return (
    <>
    <div className={style.apyContainer}>
    <h2 className={style.heading}> Enable Accelerated APY </h2>
    <AnotherToggleSwitch/>
    </div>
   
       <h2 className={style.heading}>Select Tier </h2>
    <div className={style.apyCompContainer}>
      <button
        className={activeButton2 === 1 ? style.inactiveButton : style.activeButton}
        onClick={() => buttonClick2(1)}
      >
        Tier 1
      </button>
      <button
        className={activeButton2 === 2 ? style.inactiveButton : style.activeButton}
        onClick={() => buttonClick2(2)}
      >
        Tier 2
      </button>
      <button
        className={activeButton2 === 3 ? style.inactiveButton : style.activeButton}
        onClick={() => buttonClick2(3)}
      >
        Tier 3
      </button>
      <button
        className={activeButton2 === 4 ? style.inactiveButton : style.activeButton}
        onClick={() => buttonClick2(4)}
      >
        Tier 4
      </button>
      <button
        className={activeButton2 === 5 ? style.inactiveButton : style.activeButton}
        onClick={() => buttonClick2(5)}
      >
        Tier 5
      </button>
    </div>
    </>
  );
};

export default ApyComp;
