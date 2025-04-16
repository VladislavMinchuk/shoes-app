export type TabParamList  = {
    Home: undefined;
    Category: undefined;
    Cart: undefined;
};

export type RootStackParamList = {
    Tabs: TabParamList;
    Product: { productId: string };
};