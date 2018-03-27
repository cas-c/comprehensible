import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'lightbox-react';

class TabbedBlockImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    open = () => {
        this.setState({ open: true });
    };

    close = () => {
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                <img onClick={this.open} className='tabbed-block-content-image' src={this.props.src} alt=''/>
                {
                    this.state.open &&
                        <Lightbox
                            mainSrc={this.props.src}
                            onCloseRequest={this.close}
                        />
                }
            </div>
        );
    }
}

TabbedBlockImage.propTypes = {
    src: PropTypes.string
}

export default TabbedBlockImage;
