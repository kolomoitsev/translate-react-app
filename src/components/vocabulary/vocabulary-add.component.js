import React, {useEffect, useState} from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './vocabulary-global.module.css';

import axios from 'axios';
import {host} from "../environment";
import {connect} from 'react-redux'


const VocabularyAdd = props =>{

    const [dictionaries, setDictionaries] = useState({})

    const [selectedDictionary, setSelectedDictionary] = useState({})

    function showState(id){
        //console.log(id)
        props.onSelectDictionary(id)
    }

    useEffect(async () => {
        const {data: {dictionaries}} = await axios.get(`${host}/api/v1/users/me`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })

        setDictionaries(dictionaries);
    }, []);


    if(dictionaries.length){

        let showDict = dictionaries.map((item, index) =>{
            let id = item.id;
            let name = item.name;
            //console.log(id)
            return(
                <div key = {id} className="col-lg-12">
                    <div className={styles.availiableDictionaries}>
                        <label onClick={() => showState(id)} htmlFor={id}>{name}</label>
                        <input type="checkbox" id={id}/>
                    </div>
                </div>
            )
        });

        return (
            <section className={styles.addVocabulary}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.addNewVocabularyBtn}>
                                <button>
                                    + New vocabulary
                                </button>
                            </div>

                            {
                                showDict
                            }



                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
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
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default connect(
    state => ({
        testStore: state,
    }),
    dispatch =>({
        onSelectDictionary: (id) => {
            dispatch({
                type: 'TRIGGER_BUTTON_ADD', payload: id
            })
        }
    }),
)
(VocabularyAdd);