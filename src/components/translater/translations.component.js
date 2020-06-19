import React from "react";
import cn from 'classnames';
import styles from './translations.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import VocabularyAdd from "../vocabulary/vocabulary-add.component";

const Translations  = props => {
    return(
        <section className={styles.sectionTranslations}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 pr-0">
                        <div className={cn(styles.translationsSection, 'p-0')}>
                            <div className={cn(styles.translations_list)}>
                                <div className="row p-0">
                                    <div className={cn('text-left', 'col-lg-4', styles.smallTitle)}>
                                        <p>Translations of words</p>
                                    </div>
                                    <div className={cn('text-center', 'col-lg-4', styles.smallTitle)}>
                                        <p>Level</p>
                                    </div>
                                    <div className={cn('text-right', 'col-lg-4', styles.smallTitle)}>
                                        <p>Add to vocabulary</p>
                                    </div>

                                    {/*samples of translating*/}


                                    <div className={cn('text-left', 'pt-2', 'col-lg-4', styles.wordTranslated)}>
                                        <h6>Example</h6>
                                    </div>
                                    <div className={cn('text-center', 'pt-2', 'col-lg-4', styles.wordLevel)}>
                                        <h6>A2</h6>
                                    </div>
                                    <div className={cn('text-right', 'pt-2', 'col-lg-4', styles.wordCheckBox)}>
                                        <div className={styles.round}>
                                            <input type="checkbox" id="checkbox"/>
                                            <label htmlFor="checkbox"></label>
                                        </div>
                                    </div>


                                    <div className={cn('text-left', 'pt-2', 'col-lg-4', styles.wordTranslated)}>
                                        <h6>Instance</h6>
                                    </div>
                                    <div className={cn('text-center', 'pt-2', 'col-lg-4', styles.wordLevel)}>
                                        <h6>B2</h6>
                                    </div>
                                    <div className={cn('text-right', 'pt-2', 'col-lg-4', styles.wordCheckBox)}>
                                        <div className={styles.round}>
                                            <input type="checkbox" id="checkbox"/>
                                            <label htmlFor="checkbox"></label>
                                        </div>
                                    </div>


                                    <div className={cn('text-left', 'pt-2', 'col-lg-4', styles.wordTranslated)}>
                                        <h6>Sample</h6>
                                    </div>
                                    <div className={cn('text-center', 'pt-2', 'col-lg-4', styles.wordLevel)}>
                                        <h6>C1</h6>
                                    </div>
                                    <div className={cn('text-right', 'pt-2', 'col-lg-4', styles.wordCheckBox)}>
                                        <div className={styles.round}>
                                            <input type="checkbox" id="checkbox"/>
                                            <label htmlFor="checkbox"></label>
                                        </div>
                                    </div>


                                    <div className={cn('text-left', 'pt-2', 'col-lg-4', styles.wordTranslated)}>
                                        <h6>Pattern</h6>
                                    </div>
                                    <div className={cn('text-center', 'pt-2', 'col-lg-4', styles.wordLevel)}>
                                        <h6>B2</h6>
                                    </div>
                                    <div className={cn('text-right', 'pt-2', 'col-lg-4', styles.wordCheckBox)}>
                                        <div className={styles.round}>
                                            <input type="checkbox" id="checkbox"/>
                                            <label htmlFor="checkbox"></label>
                                        </div>
                                    </div>

                                    {/*samples of translating end */}

                                    <div className={cn('col-lg-2', styles.customButton ,'offset-lg-9', 'float-right')}>
                                        <button>Add</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"><VocabularyAdd/></div>
                </div>
            </div>
        </section>
    )
}
export default Translations;