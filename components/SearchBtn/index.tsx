import { TouchableOpacity } from 'react-native';
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { THEME } from '../../const';

const SearchBtn: React.FC = () => {
    return (
        <TouchableOpacity>
            <MaterialIcons name="search" size={24} color={THEME.primaryColor} />
        </TouchableOpacity>
    );
};

export default SearchBtn;