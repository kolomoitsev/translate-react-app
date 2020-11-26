import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.module.css';


let Statistic = props => {
    return(
        <div className={styles.statisticSection}>
            <div className="container h-100">
                <div className="row text-center h-100 pt-5 pb-5 pl-5 pr-5">
                    <div className={cn('col-lg-1', 'd-flex', 'align-items-center', 'pl-0', 'pr-0')}><div className={styles.blueline}> </div></div>

                    <div className="col-lg-1">
                        <div className={styles.topLabel}>
                            <p>
                                left to learn
                            </p>
                        </div>
                        <div className={styles.circle}>
                            <p>1</p>
                        </div>
                    </div>

                    <div className={cn('col-lg-3', 'd-flex', 'align-items-center', 'pl-0', 'pr-0')}><div className={styles.blueline}> </div></div>

                    <div className="col-lg-2 text-center pl-0 pr-0">
                        <div className={cn(styles.topLabel, 'mx-auto', styles.center)}>
                            <p>
                                familiar
                            </p>
                        </div>
                        <div className={cn(styles.circle, 'mx-auto')}>
                            <p>1</p>
                        </div>
                    </div>

                    <div className={cn('col-lg-3', 'd-flex', 'align-items-center', 'pl-0', 'pr-0')}><div className={styles.blueline}> </div></div>

                    <div className="col-lg-1">
                        <div className={styles.topLabel}>
                            <p>
                                learned
                            </p>
                        </div>
                        <div className={styles.circle}>
                            <p>1</p>
                        </div>
                    </div>

                    <div className={cn('col-lg-1', 'd-flex', 'align-items-center', 'pl-0', 'pr-0')}><div className={styles.blueline}> </div></div>
                </div>
            </div>
        </div>
    )
}

export default Statistic;