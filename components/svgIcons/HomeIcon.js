import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const HomeIcon = ({ width, height, color }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 45 45" fill="none">
            <Path d="M41.28 19.0238L23.8256 2.96626C23.2749 2.4575 22.5523 2.17555 21.8025 2.17688C20.9775 2.17688 20.2294 2.51063 19.6894 3.05251L2.8125 19.9294V43.5938H18.2812V28.8281H26.7188V43.5938H42.1875V19.86L41.28 19.0238ZM39.375 40.7813H29.5312V28.8281C29.5312 28.0822 29.2349 27.3668 28.7075 26.8394C28.18 26.312 27.4647 26.0156 26.7188 26.0156H18.2812C17.5353 26.0156 16.82 26.312 16.2925 26.8394C15.7651 27.3668 15.4688 28.0822 15.4688 28.8281V40.7813H5.625V21.0938L21.6769 5.04188C21.6931 5.02564 21.7124 5.01279 21.7336 5.00409C21.7549 4.9954 21.7777 4.99104 21.8006 4.99126C21.8475 4.99126 21.8888 5.00813 21.9206 5.03813L39.375 21.0956V40.7813Z" fill={color} fillOpacity="0.6"/>
        </Svg>
    );
};

HomeIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
};

export default HomeIcon;
