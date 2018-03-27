import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import TabbedBlockHeader from './TabbedBlockHeader';
import TabbedBlockBody from './TabbedBlockBody';

class TabbedBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    makeActive = (i) => {
        if (this.state.active === i) return;
        this.setState({ active: i });
    };

    render() {
        return (
            <div className='tabbed-block'>
                <div className='tabbed-block-container'>
                    <div className='tabbed-block-wrapper'>
                        <div className='tabbed-block-wrapper-col'>
                            <div className='tabbed-block-header-wrapper'>
                                <TabbedBlockHeader data={this.props.data.headers} active={this.state.active} activate={this.makeActive} />
                            </div>
                            <TabbedBlockBody data={this.props.data.content} active={this.state.active} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TabbedBlock.propTypes = {
    data: PropTypes.shape({
        headers: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            index: PropTypes.number
        })),
        content: PropTypes.arrayOf(PropTypes.shape({
            header: PropTypes.number,
            content: PropTypes.any
        }))
    })
}

export default TabbedBlock;
