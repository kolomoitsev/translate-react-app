import React, {useState} from "react";
import cn from 'classnames';
import styles from './auth.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import {host} from '../environment';
import {connect} from 'react-redux';




let Auth = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    function onSubmit(e){

        e.preventDefault();

        let authUser = {
            login,
            password,
        }


        axios.post(`${host}/login`, authUser)
            .then(res => {
                let token = res.data.split(" ")[1];
                sessionStorage.setItem("token", token);
                window.location = '/';
            })
            .catch(err => {
                console.log(err.response.status)
            })

    }

    return (
        <div className={styles.authSection}>
            <div className={cn(styles.authWrapper)}>
                <div className={styles.formWrapper}>
                    <div className="formInformation">
                        <h3>Join to service</h3>
                        <p>To get started, you need to log in under the data the was provided to you</p>
                    </div>
                    <div className={styles.formInterface}>
                        <form onSubmit={onSubmit}>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input type="text" className="form-control input-lg" onChange={e => setLogin(e.target.value)} placeholder={"kyrylo.hrynovych@nure.ua"}/>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Password</label>
                                <input type="text" className="form-control input-lg" onChange={e => setPassword(e.target.value)} placeholder={"**********"}/>
                            </div>


                            <input className={styles.inputSubmit} type="submit" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default connect(
    state => ({
        testStore: state.user,
    }),
    dispatch =>({}),
)(Auth);
