import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import TabbedBlockImage from './TabbedBlockImage';

const TabbedBlockContent = ({ data }) => (
    <CSSTransitionGroup
          transitionName='tabbed-block-content-animation'
          transitionEnterTimeout={300}
          transitionLeave={false}
    >
        <div key={`content${data.header}`} className='tabbed-block-content'>
            { data.text && <div dangerouslySetInnerHTML={{ __html: data.text }} /> }
            { data.image && <TabbedBlockImage src={data.image} /> }
        </div>
    </CSSTransitionGroup>
    
);

export default TabbedBlockContent;
