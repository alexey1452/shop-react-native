import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const UserIcon = ({ width, height, color }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 45 45" fill="none">
            <Path d="M22.5 3.75C17.3306 3.75 13.125 7.95563 13.125 13.125C13.125 18.2944 17.3306 22.5 22.5 22.5C27.6694 22.5 31.875 18.2944 31.875 13.125C31.875 7.95563 27.6694 3.75 22.5 3.75ZM22.5 18.75C19.3988 18.75 16.875 16.2263 16.875 13.125C16.875 10.0238 19.3988 7.5 22.5 7.5C25.6012 7.5 28.125 10.0238 28.125 13.125C28.125 16.2263 25.6012 18.75 22.5 18.75ZM39.375 39.375V37.5C39.375 30.2644 33.4856 24.375 26.25 24.375H18.75C11.5125 24.375 5.625 30.2644 5.625 37.5V39.375H9.375V37.5C9.375 32.3306 13.5806 28.125 18.75 28.125H26.25C31.4194 28.125 35.625 32.3306 35.625 37.5V39.375H39.375Z" fill={color} fillOpacity={'0.6'}/>
        </Svg>

    );
};

UserIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
};

export default UserIcon;
