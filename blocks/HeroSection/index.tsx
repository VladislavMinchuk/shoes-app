import { HeroTouchable, HeroImage, HeroTitle, ButtonOutline } from "./styles";

type HeroSectionProps = {
    onPress: () => void,
    title: string
};

const HeroSection: React.FC<HeroSectionProps> = ({ onPress, title }) => {
    return (
        <HeroTouchable onPress={onPress}>
            <HeroImage source={require('../../assets/product-img-9.jpg')} resizeMode="cover">
                <HeroTitle>{ title } </HeroTitle>
                <ButtonOutline>Переглянути</ButtonOutline>
            </HeroImage>
        </HeroTouchable>
    );
};

export default HeroSection;