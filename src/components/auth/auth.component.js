import React from "react";
import cn from 'classnames';
import styles from './auth.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const Auth = (props) => {
    return (
        <div className={styles.authSection}>
            <div className={cn(styles.authWrapper)}>
                <div className={styles.formWrapper}>
                    <div className="formInformation">
                        <h3>Join to service</h3>
                        <p>To get started, you need to log in under the data the was provided to you</p>
                    </div>
                    <div className={styles.formInterface}>
                        <form>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input type="text" className="form-control input-lg" placeholder={"kyrylo.hrynovych@nure.ua"}/>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Password</label>
                                <input type="text" className="form-control input-lg" placeholder={"**********"}/>
                            </div>


                            <input className={styles.inputSubmit} type="submit" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Auth;
