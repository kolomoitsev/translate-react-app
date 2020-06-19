import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './availiablevocabulars.module.css'


let AvailiableVocabulars = props =>{
    return(
        <section className={styles.availiableVocabulars}>
            <div className="container-fluid">
                <div className={cn('row', styles.vocabTitle)}>
                    <h5>
                        MY VOCABULARS
                    </h5>

                    <div className={styles.vocabularsList}>

                        <div className="col-lg-12 p-0">
                            <div className="customVoc">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <label htmlFor="vocabid">Vocab</label>
                                    </div>
                                <div className="col-lg-2">
                                    <input type="checkbox" id={"vocabid"}/>
                                </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 p-0">
                            <div className="customVoc">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <label htmlFor="vocab2">Kirill's vocabulary</label>
                                    </div>
                                    <div className="col-lg-2">
                                        <input type="checkbox" id={"vocab2"}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AvailiableVocabulars;