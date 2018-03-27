import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

const TabbedBlockContent = ({ data }) => (
    <CSSTransitionGroup
          transitionName='tabbed-block-content-animation'
          transitionEnterTimeout={300}
          transitionLeave={false}
    >
        <div key={`content${data.header}`} className='tabbed-block-content'>
            {
                data.text ?
                    <div dangerouslySetInnerHTML={{ __html: data.text }} /> :
                    null
            }
            {
                data.image ?  
                    <div>
                        <img src={data.image} alt=''/>
                    </div> :
                    null
            }
        </div>
    </CSSTransitionGroup>
    
);

export default TabbedBlockContent;
