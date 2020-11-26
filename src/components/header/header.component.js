import React from 'react';
import './header.module.css'
import styles from './header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';
import { connect } from 'react-redux'



let Header = props => {

    function logOut(){
        sessionStorage.removeItem('token');
        window.location = '/';
    }


    let noAuthHeader = (
        <section className={styles.headerSection}>
            <div className="container-fluid">
                <div className={cn('row', styles.headerBackground)}>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="row p-0 d-flex justify-content-between">
                            <h5 className={styles.logoName}>TRANSLATOR</h5>
                            <button onClick={showModal} className={cn(styles.headerLoginBtn)}>
                                Log in
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>
    )

    let AuthHeader = (
        <section className={styles.headerSection}>
            <div className="container-fluid">
                <div className={cn('row', styles.headerBackground)}>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="row p-0 d-flex justify-content-between">
                            <h5 className={styles.logoName}>TRANSLATOR</h5>
                            <button onClick={logOut} className={cn(styles.headerLoginBtn)}>
                                Log out
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>
    )



    function showModal(){
        props.onshowModal(true);
    }

    if(sessionStorage.getItem('token')){
        return AuthHeader
    }
    return(
     noAuthHeader
    )
}


export default connect(
    state => ({
        testStore: state.window,
    }),
    dispatch =>({
        onshowModal: (windowValue) => {
            dispatch({
                type: 'SHOW_MODAL', payload: true
            })
        }
    }),
    )
(Header);