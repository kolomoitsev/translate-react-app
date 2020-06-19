import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './profile.module.css'
import {LanguageChanger} from "../index";

const ProfileWidget = props => {
    return(
        <section className={styles.profileSection}>
            <div className="container-fluid">
                <div className={cn('row', styles.paddingProfile)}>
                    <div className="col-lg-10">
                        <h4>
                            PROFILE
                        </h4>
                    </div>
                    <div className="col-lg-1">
                        <div className={styles.menuPointers}>
                            <div className={styles.point}></div>
                            <div className={styles.point}></div>
                            <div className={styles.point}></div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className={styles.userData}>
                            <h3>Kyrylo Hrynevich</h3>
                            <p>kyrylo.hrynevish@nure.ua</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileWidget;
