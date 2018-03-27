import React from 'react';
import PropTypes from 'prop-types';

const TabbedBlockHeader = ({ data, active, activate }) => (
    <div className='tabbed-block-header'>
        {
            data.map((d, i) => (
                <a 
                key={`d${d.index}`}
                onClick={() => activate(i)}
                className={`tabbed-block-header-item${active === i ? '-active' : ''}`}>
                    {d.name}
                </a>
            ))
        }
    </div>
);


TabbedBlockHeader.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string
    })),
    active: PropTypes.number,
    activate: PropTypes.func
}

export default TabbedBlockHeader;
