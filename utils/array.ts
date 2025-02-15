export function deepCloneArray<T>(arr: T[]): T[] {
    return JSON.parse(JSON.stringify(arr));
}

export function flattenArray<T>(arr: (T | T[])[]): T[] {
    return arr.reduce((acc: T[], item: T | T[]) => acc.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

export function uniqueArray<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

export function chunkArray<T>(arr: T[], size: number): T[][] {
    return arr.reduce((acc: T[][], _, i) => {
        if (i % size === 0) {
            acc.push(arr.slice(i, i + size));
        }
        return acc;
    }, []);
}

export function intersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(value => arr2.includes(value));
}

export function removeFalsyValues<T>(arr: (T | null | undefined | false | 0 | '' | number)[]): T[] {
    return arr.filter(Boolean) as T[];
}

export function findIndexByKey<T>(arr: T[], key: keyof T, value: any): number {
    return arr.findIndex(item => item[key] === value);
}

export function getLastItem<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

export function arrayDifference<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => !arr2.includes(item));
}

export function shuffleArray<T>(arr: T[]): T[] {
    return arr.sort(() => Math.random() - 0.5);
}
