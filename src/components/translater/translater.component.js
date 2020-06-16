import React from "react";
import styles from './translater.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';

const Translater = (props) => {
    return(
        <section className={styles.translaterSection}>
            <div className="container-fluid">
                <div className="row p-0">

                    <div className="col-lg-2"> </div>
                    <div className="col-lg-8">

                        <div className="row p-0">
                            <div className={cn('col-lg-6', 'pl-0', styles.translateTextArea)}>
                                <textarea name="" placeholder="Приклад"></textarea>
                            </div>
                            <div className={cn('col-lg-6', 'pr-0', styles.translateTextArea, styles.colorRight)}>
                                <textarea name="" placeholder="Example"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2"> </div>



                </div>
            </div>
        </section>
    )
}

export default Translater;