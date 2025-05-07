import { View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import ModalSide from "../../components/ModalSide";
import ProductFilters from "../../components/ProductFilters";
import { ApplyButton, CloseButton, FilterButton, FilterWrapper } from "./styles";
import { COLORS, THEME } from "../../const";
import { WhiteText } from "../../components/UI";


const FilterSectoin: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const filterSubmit = () => {
        // submit
        setIsModalVisible(false);
    };
    
    return (
        <View style={{ marginBottom: 20 }}>
            <View>
                <FilterButton onPress={() => { setIsModalVisible(true) }}>
                    <WhiteText>Фільтри</WhiteText>
                    <FontAwesome style={{ marginLeft: 10 }} name="filter" size={24} color={COLORS.white} />
                </FilterButton>
            </View>
            <ModalSide
                modalVisible={isModalVisible}
                onBackdropPress={() => setIsModalVisible(false)}
                onSwipeComplete={() => setIsModalVisible(false)}
            >
                <FilterWrapper>
                    <CloseButton onPress={() => setIsModalVisible(false)}>
                        <AntDesign name="closesquareo" size={30} color={THEME.secondaryColor} />
                    </CloseButton>
                    <ProductFilters/>
                    <ApplyButton onPress={() => filterSubmit()}>
                        <WhiteText>Застосувати</WhiteText>
                    </ApplyButton>
                </FilterWrapper>
            </ModalSide>
        </View>
    );
};

export default FilterSectoin;