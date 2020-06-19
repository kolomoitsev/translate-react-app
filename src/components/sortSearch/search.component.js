import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './common.module.css';


let Search = props => {
    return(
        <div className={cn(styles.commonSection, styles.specialPad)}>
            <div className="container-fluid">
                <div className="row">
                    <div className={cn('col-lg-2', styles.searchIcon)}>
                        <i className="material-icons">search</i>
                    </div>
                    <div className={cn('col-lg-8', styles.searchIcon, styles.inputValid)}>
                        <input type="text" placeholder={"Search"}/>
                    </div>
                    <div className={cn('col-lg-2', styles.searchIcon, styles.cleanInput)}>
                        <button>
                            <i className="material-icons">block</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;