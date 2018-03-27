import React from 'react';
import PropTypes from 'prop-types';
import './tab-controls.css';

const TabControls = ({ left, right, scroll, display }) => (
    <div className={`controls-bar controls-bar-${display}`}>
        { 
            left > 0 &&
                <div
                    onClick={() => scroll('left')}
                    className='tabbed-block-header-controls controls-left'
                >
                    {'<'}
                </div>
        }
        {
            left < right &&
                <div
                    onClick={() => scroll('right')} 
                    className='tabbed-block-header-controls controls-right'
                >
                    {'>'}
                </div>
        }
    </div>
);

TabControls.propTypes = {
    display: PropTypes.bool,
    left: PropTypes.number,
    right: PropTypes.number,
    scroll: PropTypes.func
};

export default TabControls;
