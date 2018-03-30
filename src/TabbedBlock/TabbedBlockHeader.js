import React from 'react';
import PropTypes from 'prop-types';

const TabbedBlockHeader = ({ data, active, activate, getBlockHeaderRef }) => (
    <div className='tabbed-block-header' ref={getBlockHeaderRef}>
        {
            data.map((d, i) => (
                <a 
                    key={`d${d.index}`}
                    onClick={() => activate(i)}
                    className={`tabbed-block-header-item ${active === i ? 'tabbed-block-header-item-active' : ''}`}
                >
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
    activate: PropTypes.func,
    getBlockHeaderRef: PropTypes.func
}

export default TabbedBlockHeader;
