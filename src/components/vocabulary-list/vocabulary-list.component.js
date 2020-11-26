import React, {useEffect, useState} from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './vocabulary-list.module.css'
import {connect} from "react-redux";
import axios from 'axios';
import {host} from "../environment";

let VocabularyList = props =>{


    const[words, setWords] = useState({});
    const[selected, setSelected] = useState({});

    function deleteItem(value) {

        let wordId = value;
        setSelected(wordId)
    }

    function deleteWord() {
        let vocabulary_id = props.testStore.vocabularyList.vocabularyList;

        if(selected){
            let wordId = selected;
            axios.put(`${host}/api/v1/dictionaries/${vocabulary_id}?variantId=${wordId}`)
                .then(res => setWords(res.data))
                .catch(err => console.log(err))
        }
    }


    if(props.testStore.vocabularyList.vocabularyList !== []){
        let vocabulary_id = props.testStore.vocabularyList.vocabularyList;

        axios.get(`${host}/api/v1/dictionaries/${vocabulary_id}`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => setWords(res.data))
    }

    if(words.length){

        let printWords = words.map((item, index = 1) =>{

            let value = item.value;
            let explanation  = item.context;
            let id  = item.word.id;
            let level = (item.word.levels == null) ? 'A1' : item.word.levels;
            index++;
            return(
                <div key={id} className="row text-center pt-2 pb-2 m-0">
                    <div className={cn('col-lg-1', styles.decorateText)}>
                        {index}
                    </div>

                    <div className={cn('col-lg-3', styles.decorateText)}>
                        {value}
                    </div>
                    <div className={cn('col-lg-3', styles.decorateText)}>
                        {explanation}
                    </div>
                    <div className={cn('col-lg-3', styles.decorateText)}>
                        {level}
                    </div>
                    <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
                        <div className={cn(styles.round)}>
                            <input type="checkbox" id={id}/>
                            <label onClick = {() => deleteItem(id)} htmlFor={id}></label>
                        </div>
                    </div>
                </div>
            )
        })

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


                                {
                                    printWords
                                }



                                <button onClick={() => deleteWord()} className={cn("btn", "float-right", styles.stylishbtn)}>
                                    Delete
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else {
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

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )

    }

    // return(
    //     <section className={styles.vocablist}>
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className={cn(styles.insideWrapper, 'w-100')}>
    //                     <div className={cn(styles.headers, 'w-100')}>
    //
    //
    //
    //                         <div className="row text-center pt-4 pb-4 m-0">
    //                             <div className={cn('col-lg-1', styles.decorateTitle)}>
    //                                 №
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateTitle)}>
    //                                 Word
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateTitle)}>
    //                                 Translation
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateTitle)}>
    //                                 Level
    //                             </div>
    //                             <div className={cn('col-lg-2', styles.decorateTitle)}>
    //                                 Add or delete
    //                             </div>
    //                         </div>
    //
    //                         <div className="row text-center pt-2 pb-2 m-0">
    //                             <div className={cn('col-lg-1', styles.decorateText)}>
    //                                 1
    //                             </div>
    //
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 Example
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 Приклад
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 A2
    //                             </div>
    //                             <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
    //                                 <div className={cn(styles.round)}>
    //                                     <input type="checkbox" id="checkbox"/>
    //                                     <label htmlFor="checkbox"></label>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //                         <div className="row text-center pt-2 pb-2 m-0">
    //                             <div className={cn('col-lg-1', styles.decorateText)}>
    //                                 1
    //                             </div>
    //
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 Example
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 Приклад
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 A2
    //                             </div>
    //                             <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
    //                                 <div className={cn(styles.round)}>
    //                                     <input type="checkbox" id="checkbox"/>
    //                                     <label htmlFor="checkbox"></label>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //                         <div className="row text-center pt-2 pb-2 m-0">
    //                             <div className={cn('col-lg-1', styles.decorateText)}>
    //                                 1
    //                             </div>
    //
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 Example
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 Приклад
    //                             </div>
    //                             <div className={cn('col-lg-3', styles.decorateText)}>
    //                                 A2
    //                             </div>
    //                             <div className={cn('text-center', 'col-lg-2', styles.wordCheckBox)}>
    //                                 <div className={cn(styles.round)}>
    //                                     <input type="checkbox" id="checkbox"/>
    //                                     <label htmlFor="checkbox"></label>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //
    //                        <button className={cn("btn", "float-right", styles.stylishbtn)}>
    //                            Delete
    //                        </button>
    //
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )
}

export default connect(
    state => ({
        testStore: state,
    }),
    ({}),
)
(VocabularyList);