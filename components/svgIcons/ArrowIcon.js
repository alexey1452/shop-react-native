import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const ArrowIcon = ({ width, height, color='#AFAFAF', style }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 26 26" fill="none" style={style}>
            <Path d="M22.1406 12.0352H7.28451L16.1763 4.31641C16.3185 4.19199 16.2322 3.96094 16.0443 3.96094H13.7972C13.6982 3.96094 13.6042 3.99648 13.5306 4.05996L3.93548 12.3855C3.8476 12.4617 3.77712 12.5559 3.72882 12.6617C3.68052 12.7675 3.65552 12.8824 3.65552 12.9987C3.65552 13.115 3.68052 13.23 3.72882 13.3358C3.77712 13.4416 3.8476 13.5357 3.93548 13.6119L13.5865 21.9883C13.6245 22.0213 13.6702 22.0391 13.7185 22.0391H16.0417C16.2296 22.0391 16.3159 21.8055 16.1738 21.6836L7.28451 13.9648H22.1406C22.2523 13.9648 22.3437 13.8734 22.3437 13.7617V12.2383C22.3437 12.1266 22.2523 12.0352 22.1406 12.0352Z" fill={color}/>
        </Svg>

    );
};

ArrowIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
};

export default ArrowIcon;
