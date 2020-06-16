import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './language-changer.module.css'
import cn from 'classnames'


const LanguageChanger = props => {
    return(
        <section className={styles.languageChangerSection}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 p-0"> </div>
                    <div className={ cn('col-lg-8', 'p-0', styles.wtBackground)}>
                        <div className={styles.languageTitle}>
                            <h5>TRANSLATOR</h5>
                            <div className={styles.blueLine}>
                            </div>
                        </div>
                        <div className="switcherSection">
                            <div className="row p-0">
                                <div className="col-lg-5 text-center">
                                    <div className={cn('row', styles.specialPadding)}>
                                        <div className={cn('col-lg-6', 'offset-lg-3')}>
                                            <h3 className={cn('m-0', styles.languageTitleName )}>Ukrainian</h3>
                                        </div>
                                        <div className="col-lg-2 d-flex align-items-center">
                                            <i className="material-icons">expand_more</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center my-auto">
                                    <button className="btn">
                                        <i className="material-icons">compare_arrows</i>
                                    </button>

                                </div>
                                <div className="col-lg-5 text-center">
                                    <div className={cn('row', styles.specialPadding)}>
                                        <div className={cn('col-lg-3', 'offset-lg-3')}>
                                            <h3 className={cn('m-0', styles.languageTitleName )}>English</h3>
                                        </div>
                                        <div className="col-lg-2 offset-lg-1 d-flex align-items-center">
                                            <i className="material-icons">expand_more</i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 p-0"> </div>
                </div>
            </div>
        </section>
    )
}

export default LanguageChanger;