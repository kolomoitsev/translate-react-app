import React, {useEffect, useState} from "react";
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './profile.module.css'
import {LanguageChanger} from "../index";
import axios from "axios";
import {host} from "../environment";

const ProfileWidget = props => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [dictionaries, setDictionaries] = useState([]);

    useEffect(async () => {
        const {data: {name, email}} = await axios.get(`${host}/api/v1/users/me`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        setName(name);
        setEmail(email);
    }, []);

    if(name){
        return(
            <section className={styles.profileSection}>
                <div className="container-fluid">
                    <div className={cn('row', styles.paddingProfile)}>
                        <div className="col-lg-10">
                            <h4>
                                PROFILE
                            </h4>
                        </div>
                        <div className="col-lg-1">
                            <div className={styles.menuPointers}>
                                <div className={styles.point}></div>
                                <div className={styles.point}></div>
                                <div className={styles.point}></div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={styles.userData}>
                                <h3 key = {name}>{name}</h3>
                                <p key = {email}>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
        return null;
    }


}

export default ProfileWidget;
