export const parseToNum = (str: string | number): number => {
    if (typeof str === 'number') return str;
    return Number(str.replaceAll(',', '.'));
};

export const numericStringValue = (value: string): string => {
    return value.replace(/[^0-9]/g, '');
};