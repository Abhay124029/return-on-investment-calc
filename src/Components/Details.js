import { useCustomRoiContext } from "../RoiContext";
import styles from "../Styles/Details.module.css"

function Details () {
  const {handleClick, showData} = useCustomRoiContext();

    return (
        <>
        <div className={styles.detailsContainer}>
            <h2 className={styles.detailsHeading} onClick = {handleClick}>
                {showData ? "Hide Details" : "Show Details"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.6566 5.64326L7.99995 11.2999L2.34328 5.64326L3.28595 4.69993L7.99995 9.41459L12.7139 4.69993L13.6566 5.64326Z" fill="black"/>
    </svg>
            </h2>

        

        {showData && (
            <>
                <div className={styles.detailsResult}>
                <div className={styles.titleLeft}> APY </div>
                <div className={styles.titleRight}> 0.00 % </div>
               </div>

                <div className="list">
                    <li className={styles.listPara}>
                    Calculated based on current rates
                    </li>
                    <li className={styles.listPara}> All figures are estimates provided for your convenience only, 
                                                    and by no means represent guaranted returns. </li>
                </div>
            </>
        )}
                
                </div>
        </>
    )
}

export default Details;