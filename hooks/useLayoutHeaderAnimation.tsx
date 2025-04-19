import { useRef } from "react";
import { Animated, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

export const useLayoutHeaderAnimation = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );

    const animatedBackground = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"],
        extrapolate: "clamp",
    });

    return {
        onScroll,
        animatedBackground,
    };
};
