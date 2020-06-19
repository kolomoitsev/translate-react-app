import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SwitcherAuthorized, ProfileWidget, AvailiableVocabulars, Sort, Search, VocabularyList} from '../index'
import styles from './vocabulary-page.module.css'

let VocabularyPage = props =>{
    return(
        <div className={styles.mg200}>
            <SwitcherAuthorized />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3 p-0">
                                    <ProfileWidget />
                                    <AvailiableVocabulars/>
                                </div>
                                <div className="col-lg-9 p-0">
                                    <div className="row">
                                        <div className="col-lg-6 pr-0"><Sort/></div>
                                        <div className="col-lg-6 pl-0"><Search/></div>

                                        <div className="col-lg-12">
                                            <VocabularyList />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default VocabularyPage;