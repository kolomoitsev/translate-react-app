import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './switcher.module.css';
import cn from "classnames";

const SwitcherAuthorized = props =>{
    return(
        <section className={styles.sectionSwitcher}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className={cn('row', 'col-lg-8', 'text-center', styles.wtBg, 'm-0')}>

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
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>
    )
}

export default SwitcherAuthorized;