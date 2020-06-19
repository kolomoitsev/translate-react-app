import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './common.module.css';


let Sort = props => {
    return(
        <div className={styles.commonSection}>
            <select className={styles.customSelect}>
                <option value="">Sorted by</option>
                <option value="">name</option>
                <option value="">frequency</option>
                <option value="">name</option>
            </select>
        </div>
    )
}

export default Sort;