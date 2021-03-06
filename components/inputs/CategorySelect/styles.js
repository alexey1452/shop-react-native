import styled from 'styled-components';

export const CategoryContainer = styled.View`
height: 70px;
border-bottom-width: 1px;
border-bottom-color: #000;
padding: 0 16px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Title = styled.Text`
font-size: 18px;
`;

export const BackButton = styled.TouchableOpacity`
width: 100%;
backgroundColor: #BF0B0A; 
height: 40;
alignItems: center;
justifyContent: center;
`;

export const BackButtonText = styled.Text`
color: #fff;
fontSize: 18;
`;
