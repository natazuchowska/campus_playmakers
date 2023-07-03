import React from 'react'
import styles from './style.js';

import { Navbar, Hero, Mission, Contact, Stats, Footer, Donate } from './components';


const App = () => (
  <div className="bg-yellow_bg w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        < Navbar />
      </div>
    </div>

    <div className={`bg-yellow_bg ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        < Hero />
      </div>
    </div>

    <div className={`bg-yellow_bg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        < Stats />
        < Mission />
        < Donate />
        < Contact />
        < Footer />
      </div>
    </div>

  </div>
);

export default App