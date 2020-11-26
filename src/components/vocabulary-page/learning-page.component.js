import React from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SwitcherAuthorized, ProfileWidget, AvailiableVocabulars, Statistic, ModeSelect, VocabularyList, LearningInput} from '../index'
import styles from './vocabulary-page.module.css'

let LearningPage = props =>{
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
                                    <ModeSelect/>
                                </div>
                                <div className="col-lg-9 p-0">
                                    <div className="row">

                                        <div className="col-lg-12"><Statistic/></div>

                                        <div className="col-lg-12">
                                            <LearningInput />
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

export default LearningPage;