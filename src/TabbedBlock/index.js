import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import TabbedBlockHeader from './TabbedBlockHeader';
import TabbedBlockBody from './TabbedBlockBody';

const TabbedBlock = () => (
    <div className='tabbed-block'>
        <div className='tabbed-block-container'>
            <div className='tabbed-block-wrapper'>
                <div className='tabbed-block-wrapper-col'>
                    <div className='tabbed-block-header-wrapper'>
                        <TabbedBlockHeader />
                    </div>
                    <TabbedBlockBody />
                </div>
            </div>
        </div>
    </div>
);

TabbedBlock.propTypes = {
    data: PropTypes.shape({
        headers: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            index: PropTypes.number
        }))
    })
}

export default TabbedBlock;
