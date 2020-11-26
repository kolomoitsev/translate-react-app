import React, {useState} from "react";
import styles from './translater.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';
import axios from 'axios';
import {host} from "../environment";
import fetchWords from '../api'
import { connect } from 'react-redux'


const Translater = (props) => {

    const[InputValue, setInputValue] = useState('');
    const[OutputValue, setOutputValue] = useState('');

    async function keyPress(e){

        let key = e.key;

        if (key === 'Enter') {

            let wordToBeTranslated = InputValue;

            e.preventDefault();
            let data = await fetchWords(wordToBeTranslated);
            setOutputValue(data.word_contexts[0].value.split(' ')[0]);

            props.onAddWords(data);

            return false;
        }
        else {
            return true;
        }
    }

    async function handleClick(e){

        let wordToBeTranslated = InputValue;

        let data = await fetchWords(wordToBeTranslated);
        setOutputValue(data.word_contexts[0].value.split(' ')[0]);

        props.onAddWords(data);
    }

    return(
        <section className={styles.translaterSection}>
            <div className="container-fluid">
                <div className="row p-0">

                    <div className="col-lg-2"> </div>
                    <div className="col-lg-8">

                        <div className="row p-0">
                            <div className={cn('col-lg-6', 'pl-0', styles.translateTextArea)}>
                                <textarea onChange={e => setInputValue(e.target.value)} onKeyPress={ keyPress } name="" placeholder="Приклад"></textarea>
                            </div>
                            <div className={cn('col-lg-6', 'pr-0', styles.translateTextArea, styles.colorRight)}>
                                <textarea name="" placeholder="Example" defaultValue={OutputValue}></textarea>
                            </div>
                            <div className="col-lg-3 offset-lg-9 text-right pr-0 mt-4">
                                <button onClick={handleClick} className={styles.colorizeButton}>
                                    Translate
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2"> </div>

                </div>
            </div>
        </section>
    )
}


export default connect(
    state => ({
        testStore: state.window,
    }),
    dispatch =>({
        onAddWords: (words) => {
            dispatch({
                type: 'ADD_WORDS', payload: words
            })
        }
    }),
)
(Translater);