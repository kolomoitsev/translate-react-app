import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './switcher.module.css';
import cn from 'classnames';

const SwitcherNotAuthorized = props =>{
    return(

        <section className={styles.sectionSwitcher}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>

                    <div className="col-lg-8 text-center p-0">
                        <div className={styles.languageTitle}>
                            <h5>TRANSLATOR</h5>
                            <div className={styles.blueLine}>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>


    )
}

export default SwitcherNotAuthorized;