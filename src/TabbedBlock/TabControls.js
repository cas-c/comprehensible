import React from 'react';
import PropTypes from 'prop-types';
import './tab-controls.css';

const TabControls = ({ left, right, scroll }) => (
    <div className='controls-bar'>
        <div
            onClick={() => scroll('left')}
            className='tabbed-block-header-controls controls-left'
        >
            {'<'}
        </div>
        <div
            onClick={() => scroll('right')} 
            className='tabbed-block-header-controls controls-right'
        >
            {'>'}
        </div>
    </div>
);

TabControls.propTypes = {
    left: PropTypes.number,
    right: PropTypes.number,
    scroll: PropTypes.func
};

export default TabControls;
