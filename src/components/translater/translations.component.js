import React, {useState} from "react";
import cn from 'classnames';
import styles from './translations.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import VocabularyAdd from "../vocabulary/vocabulary-add.component";
import {connect} from "react-redux";
import axios from 'axios';
import {host} from "../environment";


const Translations  = props => {

    let container = props.words.words[0];

    const[wordId, setWordId] = useState('');
    const[dictId, setDictId] = useState('');


    function showState(id){

        if(props.vocabulary.vocabulary){
            setWordId(id);
            setDictId(props.vocabulary.vocabulary)
        }
    }

    function handleClick() {
       console.log(`word ${wordId}`);
       console.log(`dict ${dictId}`);

       axios.put(`${host}/api/v1/dictionaries/${dictId}/add?variantId=${wordId}`)
           .then(res => console.log(res.status))
           .catch(err => console.log(err))
    }

    if(props.words.words[0]){

        let container = props.words.words[0];
        let items = container['word_contexts'];



        const renObjData = items.map((item, idx) =>  {
            let groupLvl = '';
            let word = item.value;
            let contextId = item.variants[0].id;
            if(item.variants[0].levels != null){
                groupLvl = item.variants[0].levels;
            } else{
                groupLvl = 'A1';
            }
            //console.log(contextId)
            return(
                <div key = {contextId} className="row w-100 m-0">
                    <div className={cn('text-left', 'pt-2', 'col-lg-4', styles.wordTranslated)}>
                        <h6>{word}</h6>
                    </div>
                    <div className={cn('text-center', 'pt-2', 'col-lg-4', styles.wordLevel)}>
                        <h6>{groupLvl}</h6>
                    </div>
                    <div className={cn('text-right', 'pt-2', 'col-lg-4', styles.wordCheckBox)}>
                        <div className={styles.round}>
                            <input onClick={() => showState(contextId)} type="checkbox" id={contextId}/>
                            <label htmlFor={contextId}></label>
                        </div>
                    </div>
                </div>
            )

        });


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

                                        {renObjData}

                                        <div className={cn('col-lg-2', styles.customButton ,'offset-lg-9', 'float-right')}>
                                            <button onClick={handleClick} >Add</button>
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
    }else{
        return null
    }
}

export default connect(
    state => ({
        words: state.words,
        vocabulary: state.vocabulars
    }),
    ({}),
)
(Translations);