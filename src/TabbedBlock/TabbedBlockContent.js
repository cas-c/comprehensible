import React from 'react';

const TabbedBlockContent = ({ data }) => (
    <div className='tabbed-block-content'>
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
);

export default TabbedBlockContent;
