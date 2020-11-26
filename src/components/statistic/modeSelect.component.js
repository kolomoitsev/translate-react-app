import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.module.css';


let ModeSelect = props => {
    return(
        <div className={styles.modeSelect}>
            <select className={styles.customSelect}>
                <option value="">Select mode</option>
                <option value="1">input</option>
                <option value="2">buttons</option>
            </select>
        </div>
    )
}

export default ModeSelect;