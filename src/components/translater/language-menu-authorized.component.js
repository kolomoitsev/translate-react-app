import React from "react";
import styles from "./language-changer.module.css";
import cn from 'classnames'

const LanguageMenuAuthorized = props =>{
    return(
        <div className={styles.languageTitle}>


            <div className="row col-lg-10 offset-lg-1">

                <div className={cn('col-lg-4', styles.btnActive)}>
                    <button>TRANSLATOR</button>
                </div>
                <div className={cn('col-lg-4', styles.btnInactive)}>
                    <button>VOCABULARY</button>
                </div>
                <div className={cn('col-lg-4', styles.btnInactive)}>
                    <button>LEARNING</button>
                </div>

            </div>
        </div>
    )
}

export default LanguageMenuAuthorized;
