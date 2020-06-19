import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './vocabulary-list.module.css'


let VocabularyList = props =>{
    return(
        <section className={styles.vocablist}>
            <div className="container-fluid">
                <div className="row">
                    <div className={cn(styles.insideWrapper, 'w-100')}>
                        <div className={cn(styles.headers, 'w-100')}>
                            <div className="row text-center pt-4 pb-4 m-0">
                                <div className={cn('col-lg-1', styles.decorateTitle)}>
                                    №
                                </div>
                                <div className={cn('col-lg-3', styles.decorateTitle)}>
                                    Word
                                </div>
                                <div className={cn('col-lg-3', styles.decorateTitle)}>
                                    Translation
                                </div>
                                <div className={cn('col-lg-3', styles.decorateTitle)}>
                                    Level
                                </div>
                                <div className={cn('col-lg-2', styles.decorateTitle)}>
                                    Add or delete
                                </div>
                            </div>


                            <div className="row text-center pt-2 pb-2 m-0">
                                <div className={cn('col-lg-1', styles.decorateText)}>
                                    1
                                </div>

                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    Example
                                </div>
                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    Приклад
                                </div>
                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    A2
                                </div>
                                <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
                                    <div className={cn(styles.round)}>
                                        <input type="checkbox" id="checkbox"/>
                                        <label htmlFor="checkbox"></label>
                                    </div>
                                </div>
                            </div>



                            <div className="row text-center pt-2 pb-2 m-0">
                                <div className={cn('col-lg-1', styles.decorateText)}>
                                    1
                                </div>

                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    Example
                                </div>
                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    Приклад
                                </div>
                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    A2
                                </div>
                                <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
                                    <div className={cn(styles.round)}>
                                        <input type="checkbox" id="checkbox"/>
                                        <label htmlFor="checkbox"></label>
                                    </div>
                                </div>
                            </div>



                            <div className="row text-center pt-2 pb-2 m-0">
                                <div className={cn('col-lg-1', styles.decorateText)}>
                                    1
                                </div>

                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    Example
                                </div>
                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    Приклад
                                </div>
                                <div className={cn('col-lg-3', styles.decorateText)}>
                                    A2
                                </div>
                                <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
                                    <div className={cn(styles.round)}>
                                        <input type="checkbox" id="checkbox"/>
                                        <label htmlFor="checkbox"></label>
                                    </div>
                                </div>
                            </div>


                           <button className={cn("btn", "float-right", styles.stylishbtn)}>
                               Delete
                           </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VocabularyList