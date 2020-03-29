import React from 'react';
import { Svg, Path } from 'react-native-svg';

const SettingsIcon = ({ width, height }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
            <Path d="M26.8337 48.2313H23.1487C22.3198 48.2309 21.5248 47.9019 20.9381 47.3163C20.3513 46.7308 20.0207 45.9364 20.0187 45.1075V41.0612C18.898 40.7123 17.8163 40.2481 16.7912 39.6763L14.22 42.2313C13.0187 43.41 10.9837 43.3988 9.79998 42.2175L7.19498 39.5963C6.61228 39.0078 6.28675 38.2123 6.2898 37.3841C6.29284 36.556 6.62421 35.7629 7.21123 35.1788L9.92998 32.4788C9.5301 31.6719 9.19448 30.8347 8.92623 29.975H4.88623C4.05713 29.971 3.26325 29.6393 2.67781 29.0522C2.09236 28.4652 1.76287 27.6704 1.76123 26.8413V23.155C1.76189 22.3262 2.09126 21.5314 2.6771 20.9451C3.26294 20.3588 4.0574 20.0288 4.88623 20.0275H8.93248C9.28087 18.9085 9.74505 17.8289 10.3175 16.8063L7.30498 13.7638C7.01451 13.4724 6.78482 13.1262 6.62925 12.7453C6.47368 12.3644 6.39532 11.9564 6.39873 11.545C6.40007 11.1347 6.48286 10.7287 6.64229 10.3506C6.80171 9.97256 7.03461 9.62989 7.32748 9.3425L9.94123 6.74125C11.1387 5.56625 13.1875 5.57875 14.3625 6.75625L17.5175 9.94C18.3175 9.54 19.1587 9.2025 20.0287 8.93625V4.89375C20.0287 3.17 21.4312 1.76875 23.1537 1.76875H26.8437C27.672 1.77008 28.466 2.09978 29.0515 2.68558C29.6371 3.27138 29.9665 4.06547 29.9675 4.89375V8.94125C30.8702 9.22094 31.7475 9.5768 32.59 10.005L35.775 6.85C36.9762 5.67 39.0162 5.6875 40.195 6.865L42.795 9.485C43.3787 10.0688 43.7012 10.855 43.7012 11.6975C43.7012 12.1083 43.6195 12.515 43.4609 12.894C43.3024 13.2729 43.07 13.6166 42.7775 13.905L39.7462 16.9175C40.29 17.91 40.7325 18.955 41.065 20.035H45.115C45.9433 20.0363 46.7372 20.366 47.3228 20.9518C47.9084 21.5376 48.2377 22.3317 48.2387 23.16V26.84C48.2384 27.6688 47.9093 28.4637 47.3237 29.0502C46.7381 29.6368 45.9438 29.9671 45.115 29.9688H41.065C40.7866 30.8731 40.4299 31.7514 39.9987 32.5938L42.6975 35.3113C43.28 35.8875 43.6025 36.675 43.6025 37.5238C43.6025 38.3563 43.2737 39.1388 42.6787 39.7288L40.065 42.3313C38.8637 43.51 36.8112 43.4875 35.6462 42.3138L33.095 39.7425C32.0987 40.29 31.0575 40.7338 29.9862 41.065V45.1138C29.9722 45.9422 29.6345 46.7323 29.0453 47.3149C28.4561 47.8976 27.6623 48.2265 26.8337 48.2313ZM16.6025 38.1888L16.9987 38.4225C18.1808 39.1253 19.45 39.6699 20.7737 40.0425L21.2075 40.1638V45.105C21.2075 46.1725 22.0787 47.0413 23.1487 47.0413H26.8337C27.3487 47.0384 27.8422 46.8345 28.2091 46.4731C28.5759 46.1116 28.7871 45.6211 28.7975 45.1063V40.1713L29.2312 40.05C30.5149 39.6904 31.7465 39.1656 32.895 38.4888L33.2912 38.255L36.4875 41.475C37.2087 42.2025 38.4825 42.215 39.2287 41.4838L41.84 38.8825C42.2087 38.5175 42.4125 38.0338 42.4125 37.5213C42.4125 36.9925 42.215 36.5063 41.8562 36.1513L38.535 32.805L38.7462 32.4175C39.3087 31.3825 39.745 30.3038 40.045 29.2138L40.1662 28.7775H45.115C46.1825 28.7775 47.0512 27.9075 47.0512 26.8375V23.1575C47.0512 22.09 46.1825 21.22 45.115 21.22H40.1675L40.0462 20.785C39.6887 19.499 39.1664 18.2646 38.4925 17.1125L38.26 16.715L41.9387 13.0588C42.3087 12.6913 42.5125 12.2063 42.5125 11.6938C42.5125 11.1688 42.3137 10.6813 41.9525 10.3213L39.3525 7.70125C38.9847 7.34521 38.4933 7.14552 37.9815 7.14413C37.4696 7.14273 36.9772 7.33973 36.6075 7.69375L32.8037 11.4625L32.4162 11.2538C31.4002 10.7025 30.3256 10.2668 29.2125 9.955L28.7775 9.83375V4.89375C28.7775 3.82625 27.9087 2.95625 26.8412 2.95625H23.1512C22.0837 2.95625 21.215 3.825 21.215 4.89375V9.8325L20.78 9.95375C19.6925 10.255 18.6512 10.6725 17.6825 11.1925L17.2912 11.4025L13.5175 7.595C12.7912 6.87 11.515 6.85875 10.7737 7.5875L8.16248 10.1863C7.98064 10.3641 7.83603 10.5764 7.73709 10.8108C7.63816 11.0452 7.58687 11.2969 7.58623 11.5513C7.58407 11.8065 7.63268 12.0596 7.72925 12.2959C7.82582 12.5321 7.96841 12.7469 8.14873 12.9275L11.8025 16.6188L11.5687 17.0125C10.8662 18.1929 10.3215 19.4604 9.94873 20.7825L9.82748 21.2163H4.88623C3.81873 21.2163 2.94998 22.0863 2.94998 23.155V26.8413C2.94998 27.91 3.81873 28.7825 4.88873 28.7863H9.82498L9.94623 29.2213C10.2362 30.2663 10.6525 31.3063 11.1862 32.315L11.3925 32.7038L8.04998 36.02C7.68629 36.3817 7.48087 36.8729 7.47876 37.3858C7.47665 37.8987 7.67803 38.3916 8.03873 38.7563L10.6425 41.3763C11.3775 42.1075 12.6412 42.115 13.3862 41.3838L16.6025 38.1888Z" fill="#3A9D9E"/>
            <Path d="M25 34.1275C19.9662 34.1275 15.8725 30.0325 15.8725 25C15.8725 19.965 19.9675 15.87 25 15.87C30.0337 15.87 34.13 19.9663 34.13 25C34.1287 30.0338 30.0337 34.1275 25 34.1275ZM25 17.0588C22.8948 17.0614 20.8766 17.899 19.3881 19.3877C17.8995 20.8764 17.0623 22.8948 17.06 25C17.0626 27.105 17.9 29.123 19.3885 30.6115C20.877 32.1 22.895 32.9374 25 32.94C27.1052 32.9377 29.1236 32.1005 30.6123 30.6119C32.101 29.1234 32.9386 27.1052 32.9412 25C32.9383 22.8948 32.1006 20.8766 30.612 19.388C29.1234 17.8993 27.1052 17.0617 25 17.0588Z" fill="#3A9D9E"/>
        </Svg>
    );
};

export default SettingsIcon;
