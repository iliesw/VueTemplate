export function deepCloneObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result: Partial<T> = {};
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result as Pick<T, K>;
}

export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}

export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

export function getObjectValues<T extends object>(obj: T): (T[keyof T])[] {
    return Object.values(obj);
}

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

export function mapObjectValues<T, U>(obj: T, callback: (value: T[keyof T], key: keyof T) => U): { [K in keyof T]: U } {
    const result: { [K in keyof T]: U } = {} as any;
    for (const key in obj) {
        result[key] = callback(obj[key], key);
    }
    return result;
}

export function filterObject<T>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T> {
    const result: Partial<T> = {};
    for (const key in obj) {
        if (predicate(obj[key], key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

export function mergeDeep<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            target[key] = mergeDeep(target[key] as T[Extract<keyof T, string>], source[key] as T[Extract<keyof T, string>]);
        } else {
            target[key] = source[key] as T[Extract<keyof T, string>];
        }
    }
    return target;
}
