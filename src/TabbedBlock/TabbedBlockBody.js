import React from 'react';
import PropTypes from 'prop-types';

import TabbedBlockContent from './TabbedBlockContent';

const TabbedBlockBody = ({ data, active }) => <TabbedBlockContent data={data.find(d => d.header === active)} />;

TabbedBlockBody.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.number,
        content: PropTypes.any
    }))
}

export default TabbedBlockBody;
