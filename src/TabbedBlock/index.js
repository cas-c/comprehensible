import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import TabbedBlockHeader from './TabbedBlockHeader';
import TabControls from './TabControls';
import TabbedBlockBody from './TabbedBlockBody';

const minus = (x, y) => x - y;
const plus = (x, y) => x + y;
const move = (dir, x, y) => dir === 'left' ? minus(x, y) : plus(x, y);

class TabbedBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            mouse: false,
            leftScroll: 0,
            rightMax: 0
        };
    }

    componentDidMount() {
        this.headerRef.scroll({ left: 0 });
        this.setState({ rightMax: this.headerRef.scrollWidth - this.headerRef.clientWidth });
    }

    getHeaderRef = i => {
        this.headerRef = i;
    }

    makeActive = i => {
        if (this.state.active === i) return;
        this.setState({ active: i });
    };

    mouseOverControls = () => {
        this.setState({ moused: true });
    }

    mouseExitControls = () => {
        this.setState({ moused: false });
    }

    // In order to avoid having to check whether to use scroll left or right
    // we've made a decision to always scroll left a positive or negative amount.
    scrollHeader = direction => {
        const left = move(direction, this.headerRef.scrollLeft, this.headerRef.clientWidth);
        this.headerRef.scroll({ left , behavior: 'smooth' });
        this.setState({ leftScroll: left });
    }
    render() {
        return (
            <div className='tabbed-block-root'>
                <div className='tabbed-block-container'>
                    <div className='tabbed-block'>
                        <div className='tabbed-block-scroll-wrapper'>
                            <div
                                ref={hwrap => this.hwrapper = hwrap}
                                className='tabbed-block-header-wrapper'
                                onMouseOver={this.mouseOverControls}
                                onMouseLeave={this.mouseExitControls}
                            >
                                <TabbedBlockHeader
                                    data={this.props.data.headers}
                                    active={this.state.active}
                                    activate={this.makeActive}
                                    getBlockHeaderRef={this.getHeaderRef}
                                />
                                <TabControls
                                    display={this.state.moused}
                                    left={this.state.leftScroll}
                                    right={this.state.rightMax}
                                    scroll={this.scrollHeader}
                                />
                            </div>
                        </div>
                        <div className='tabbed-block-content'>
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
        header: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            index: PropTypes.number
        })),
        content: PropTypes.arrayOf(PropTypes.shape({
            header: PropTypes.number,
            text: PropTypes.string,
            image: PropTypes.any
        }))
    })
}

export default TabbedBlock;
