// Timeframe.js
import styles from "../Styles/TimeFrame.module.css"
import { useCustomRoiContext } from '../RoiContext';

const Timeframe = () => {
  
const {buttonClick, activeButton} = useCustomRoiContext();
 

  return (
    <>
       <h2 className={styles.heading}> Timeframe</h2>
    <div className={styles.timeframeContainer}>
    
      <button
        className={activeButton === 1 ? styles.inactiveButton : styles.activeButton}
        onClick={() => buttonClick(1)}
      >
        1 Day
      </button>
      <button
        className={activeButton === 2 ? styles.inactiveButton : styles.activeButton}
        onClick={() => buttonClick(2)}
      >
        7 Days
      </button>
      <button
        className={activeButton === 3 ? styles.inactiveButton : styles.activeButton}
        onClick={() => buttonClick(3)}
      >
        30 Days
      </button>
      <button
        className={activeButton === 4 ? styles.inactiveButton : styles.activeButton}
        onClick={() => buttonClick(4)}
      >
        1 Year
      </button>
      <button
        className={activeButton === 5 ? styles.inactiveButton : styles.activeButton}
        onClick={() => buttonClick(5)}
      >
        5 Years
      </button>
    </div>
    </>
  );
};

export default Timeframe;
