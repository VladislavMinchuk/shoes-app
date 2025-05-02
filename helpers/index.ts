export const parseToNum = (str: string | number): number => {
    if (typeof str === 'number') return str;
    return Number(str.replaceAll(',', '.'));
};
