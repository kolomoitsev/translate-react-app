import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './switcher.module.css';
import cn from "classnames";

const SwitcherAuthorized = props =>{

    console.log(window.location.href)

    let href = (window.location.href).split('/')[3];

    console.log(href)


    if( href === '') {
        return  (
            <section className={styles.sectionSwitcher}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className={cn('row', 'col-lg-8', 'text-center', styles.wtBg, 'm-0')}>

                            <div className={cn('col-lg-4', styles.btnActive)}>
                                <button onClick={showHome}>TRANSLATOR</button>
                            </div>
                            <div className={cn('col-lg-4', styles.btnInactive)}>
                                <button onClick={showDictionaties}>VOCABULARY</button>
                            </div>
                            <div className={cn('col-lg-4', styles.btnInactive)}>
                                <button onClick={showLearning}>LEARNING</button>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
        )
    } else if (href === 'vocabulary'){
        return (
            <section className={styles.sectionSwitcher}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className={cn('row', 'col-lg-8', 'text-center', styles.wtBg, 'm-0')}>

                            <div className={cn('col-lg-4', styles.btnInactive)}>
                                <button onClick={showHome}>TRANSLATOR</button>
                            </div>
                            <div className={cn('col-lg-4', styles.btnActive)}>
                                <button onClick={showDictionaties}>VOCABULARY</button>
                            </div>
                            <div className={cn('col-lg-4', styles.btnInactive)}>
                                <button onClick={showLearning}>LEARNING</button>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className={styles.sectionSwitcher}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className={cn('row', 'col-lg-8', 'text-center', styles.wtBg, 'm-0')}>

                            <div className={cn('col-lg-4', styles.btnInactive)}>
                                <button onClick={showHome}>TRANSLATOR</button>
                            </div>
                            <div className={cn('col-lg-4', styles.btnInactive)}>
                                <button onClick={showDictionaties}>VOCABULARY</button>
                            </div>
                            <div className={cn('col-lg-4', styles.btnActive)}>
                                <button onClick={showLearning}>LEARNING</button>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
        )
    }

    function showHome() {
        window.location = '/';
    }
    function showDictionaties() {
        window.location = '/vocabulary';
    }
    function showLearning() {
        window.location = '/learning';
    }

    // return(
    //     <section className={styles.sectionSwitcher}>
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className="col-lg-2"></div>
    //                 <div className={cn('row', 'col-lg-8', 'text-center', styles.wtBg, 'm-0')}>
    //
    //                     <div className={cn('col-lg-4', styles.btnActive)}>
    //                         <button onClick={showHome}>TRANSLATOR</button>
    //                     </div>
    //                     <div className={cn('col-lg-4', styles.btnInactive)}>
    //                         <button onClick={showDictionaties}>VOCABULARY</button>
    //                     </div>
    //                     <div className={cn('col-lg-4', styles.btnInactive)}>
    //                         <button onClick={showLearning}>LEARNING</button>
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-2"></div>
    //             </div>
    //         </div>
    //     </section>
    // )
}

export default SwitcherAuthorized;