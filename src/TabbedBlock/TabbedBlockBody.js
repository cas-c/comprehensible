import React from 'react';
import PropTypes from 'prop-types';

import TabbedBlockContent from './TabbedBlockContent';

const TabbedBlockBody = ({ data, active }) => (
    <div className='tabbed-block-body'>
        <TabbedBlockContent data={data.find(d => d.header === active)} />
    </div>
);

TabbedBlockBody.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.number,
        content: PropTypes.any
    }))
}

export default TabbedBlockBody;
