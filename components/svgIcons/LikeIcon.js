import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const LikeIcon = ({ width, height, color }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
            <Path d="M25 39.7L24.4 39.2C11.5 28.7 8 25 8 19C8 14 12 10 17 10C21.1 10 23.4 12.3 25 14.1C26.6 12.3 28.9 10 33 10C38 10 42 14 42 19C42 25 38.5 28.7 25.6 39.2L25 39.7ZM17 12C13.1 12 10 15.1 10 19C10 24.1 13.2 27.5 25 37.1C36.8 27.5 40 24.1 40 19C40 15.1 36.9 12 33 12C29.5 12 27.6 14.1 26.1 15.8L25 17.1L23.9 15.8C22.4 14.1 20.5 12 17 12Z" fill={color} />
        </Svg>
    );
};

LikeIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
};

export default LikeIcon;
