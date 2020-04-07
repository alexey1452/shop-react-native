import React from 'react';
import { Svg, Path } from 'react-native-svg';

const LikeIconFilled = ({ width, height, color = '#DC0202' }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 44 38" fill="none">
            <Path d="M42.0684 7.84766C41.4139 6.33221 40.4701 4.95893 39.29 3.80469C38.109 2.647 36.7166 1.72701 35.1885 1.09473C33.6039 0.43649 31.9043 0.0995663 30.1885 0.103516C27.7812 0.103516 25.4326 0.762695 23.3916 2.00781C22.9033 2.30566 22.4395 2.63281 22 2.98926C21.5605 2.63281 21.0967 2.30566 20.6084 2.00781C18.5674 0.762695 16.2187 0.103516 13.8115 0.103516C12.0781 0.103516 10.3984 0.435547 8.81152 1.09473C7.27832 1.72949 5.89648 2.64258 4.70996 3.80469C3.5283 4.95763 2.58436 6.33123 1.93164 7.84766C1.25293 9.4248 0.90625 11.0996 0.90625 12.8232C0.90625 14.4492 1.23828 16.1436 1.89746 17.8672C2.44922 19.3076 3.24023 20.8018 4.25098 22.3105C5.85254 24.6982 8.05469 27.1885 10.7891 29.7129C15.3203 33.8975 19.8076 36.7881 19.998 36.9053L21.1553 37.6475C21.668 37.9746 22.3271 37.9746 22.8398 37.6475L23.9971 36.9053C24.1875 36.7832 28.6699 33.8975 33.2061 29.7129C35.9404 27.1885 38.1426 24.6982 39.7441 22.3105C40.7549 20.8018 41.5508 19.3076 42.0977 17.8672C42.7568 16.1436 43.0889 14.4492 43.0889 12.8232C43.0938 11.0996 42.7471 9.4248 42.0684 7.84766Z" fill={color} />
        </Svg>

    );
};

export default LikeIconFilled;
