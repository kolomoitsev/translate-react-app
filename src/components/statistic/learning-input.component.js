import React, {useState} from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.module.css';
import {connect} from "react-redux";


let LearningInput = props => {

    return(
        <div className={styles.learningSection}>
            <div className="container h-100">
                <div className={cn('row', styles.inside)}>
                    <div className="col-lg-12">
                        <div className="question">
                            <h3>
                                question
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <div className={cn(styles.trueAnswer)}>
                            <h3>
                                answer
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <form className="w-100">
                        <div className="row">
                            <div className="col-lg-2"> </div>
                            <div className="col-lg-5">
                                <input className={cn(styles.checkInput)} type="text" placeholder={"Your translations"}/>
                            </div>
                            <div className="col-lg-3">
                                <button className={cn(styles.checkBtn)}>
                                    Check
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        testStore: state,
    }),
    ({})
)
(LearningInput);