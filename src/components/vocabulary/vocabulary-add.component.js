import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './vocabulary-global.module.css';

const VocabularyAdd = props =>{
    return(
        <section className={styles.addVocabulary}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.addNewVocabularyBtn}>
                            <button>
                                + New vocabulary
                            </button>
                        </div>

                        <div className="col-lg-12">
                            <div className={styles.availiableDictionaries}>
                                <label htmlFor="test1">Vocabulary</label>
                                <input type="checkbox" id={"test1"}/>
                            </div>
                        </div>


                        <div className="col-lg-12">
                            <div className={styles.availiableDictionaries}>
                                <label htmlFor="test2">Kirill's vocabulary</label>
                                <input type="checkbox" id={"test2"}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default VocabularyAdd;