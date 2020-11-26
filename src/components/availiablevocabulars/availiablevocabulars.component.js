import React, {useEffect, useState} from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './availiablevocabulars.module.css'
import axios from "axios";
import {host} from "../environment";
import {connect} from "react-redux";


let AvailiableVocabulars = props =>{

    const [dictionaries, setDictionaries] = useState([]);

    function onShowWords(num){
        //console.log(num)
        props.onSelectDictionary(num)
    }

    useEffect(async () => {
        const {data: {dictionaries}} = await axios.get(`${host}/api/v1/users/me`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        setDictionaries(dictionaries)
    }, []);


    if(dictionaries){

        let printDict = dictionaries.map((item, index) =>{
            //console.log(item)
            return(
                <div key = {item.id} className="col-lg-12 p-0">
                    <div className="customVoc">
                        <div className="row">
                            <div className="col-lg-10">
                                <label onClick={() => onShowWords(item.id)} htmlFor={item.id}>{item.name}</label>
                            </div>
                            <div className="col-lg-2">
                                <input type="checkbox" id={item.id}/>
                            </div>

                        </div>
                    </div>
                </div>
            )
        })

        return(
            <section className={styles.availiableVocabulars}>
                <div className="container-fluid">
                    <div className={cn('row', styles.vocabTitle)}>
                        <h5>
                            MY VOCABULARS
                        </h5>

                        <div className={styles.vocabularsList}>

                            {printDict}


                        </div>

                    </div>
                </div>
            </section>
        )
    } else return null;

}

export default connect(
    state => ({
        testStore: state,
    }),
    dispatch =>({
        onSelectDictionary: (id) => {
            dispatch({
                type: 'VOCABULARY_PAGE_SHOW_WORDS', payload: id
            })
        }
    }),
)
(AvailiableVocabulars);