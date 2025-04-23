import styled from "styled-components/native";
import { THEME } from "../../const";

export const Title = styled.Text`
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Row = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const Label = styled.Text`
    font-weight: 600;
    margin-right: 6px;
`;

export const Value = styled.Text`
    color: ${THEME.primaryColor};
    text-decoration: underline;
`;

export const MapButtonText = styled.Text`
    color: white;
    font-weight: 600;
`;