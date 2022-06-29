import React from "react";
import { HeroLayout2, MarketingFooter, ContactUs} from '../ui-components'

function Home() {
    return (
      <div className="App">
            <HeroLayout2 width="100%"/>   
            <ContactUs width="333px"/>  
            <MarketingFooter width="100%"/>
        </div>
    );
  }

export default Home;