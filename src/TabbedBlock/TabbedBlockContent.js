import React from 'react';

const TabbedBlockContent = ({ data }) => (
    <div className='tabbed-block-content'
        dangerouslySetInnerHTML={{ __html: data.text }} />
);

export default TabbedBlockContent;
