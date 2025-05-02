export type TabParamList  = {
    Home: undefined;
    Category: undefined;
    Cart: undefined;
};

export type RootStackParamList = {
    Tabs: { screen?: keyof TabParamList };
    Product: { productId: string };
};