import React from 'react';
import './header.module.css'
import styles from './header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';

let Header = props => {
    return(
     <section className={styles.headerSection}>
         <div className="container-fluid">
             <div className={cn('row', styles.headerBackground)}>
                 <div className="col-lg-2"></div>
                 <div className="col-lg-8">
                     <div className="row p-0 d-flex justify-content-between">
                         <h5 className={styles.logoName}>TRANSLATOR</h5>
                         <button className={cn(styles.headerLoginBtn)}>
                             Log in
                         </button>
                     </div>
                 </div>
                 <div className="col-lg-2"></div>
             </div>
         </div>
     </section>
    )
}

export default Header;