import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import TabbedBlockHeader from './TabbedBlockHeader';
import TabbedBlockBody from './TabbedBlockBody';
import TabControls from './TabControls';

//todo: find out how to find this programmatically
const MAGIC_NUMBER = 280;


class TabbedBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            maxRightScroll: MAGIC_NUMBER * props.data.headers.length,
            leftScroll: 0
        };
    }

    makeActive = i => {
        if (this.state.active === i) return;
        this.setState({ active: i });
    };

    getHeaderRef = i => {
        this.headerRef = i;
    }

    // In order to avoid having to check whether to use scroll left or right
    // we've made a decision to always scroll left a positive or negative amount.
    scrollHeader = direction => {
        // Number of elements we can show at a time.
        const space = (this.hwrapper.scrollWidth / MAGIC_NUMBER) - 1;
        // How far we're currently scrolled.
        const currentScroll = this.headerRef.scrollLeft;
        let amountToScroll;
        if (direction === 'right') amountToScroll = (MAGIC_NUMBER * space) + currentScroll;
        if (direction === 'left') amountToScroll = -(MAGIC_NUMBER * space) + currentScroll;
        // Actual scrolling function.
        this.headerRef.scroll({ left: amountToScroll, behavior: 'smooth' });
        this.setState({ leftScroll: amountToScroll });
    }

    mouseOverControls = () => {
        console.log('mouseover');
    }

    render() {
        return (
            <div className='tabbed-block'>
                <div className='tabbed-block-container'>
                    <div className='tabbed-block-wrapper'>
                        <div className='tabbed-block-wrapper-col'>
                            <div
                                ref={hwrap => this.hwrapper = hwrap}
                                className='tabbed-block-header-wrapper'
                                onMouseOver={this.mouseOverControls}
                            >
                                <TabbedBlockHeader
                                    data={this.props.data.headers}
                                    active={this.state.active}
                                    activate={this.makeActive}
                                    getBlockHeaderRef={this.getHeaderRef}
                                />
                                <TabControls left={this.state.leftScroll} right={this.state.maxRightScroll} scroll={this.scrollHeader}/>
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
