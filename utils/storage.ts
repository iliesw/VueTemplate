export function setItem<T>(key: string, value: T): void {
    const valueToStore = JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
}

export function getItem<T>(key: string): T | null {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
        try {
            return JSON.parse(storedValue) as T;
        } catch (error) {
            console.error(`Error parsing value from localStorage for key "${key}":`, error);
            return null;
        }
    }
    return null;
}

export function removeItem(key: string): void {
    localStorage.removeItem(key);
}

export function clearLocalStorage(): void {
    localStorage.clear();
}

export function hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
}

export function getAllItems(): Record<string, any> {
    const items: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            const value = getItem(key);
            items[key] = value;
        }
    }
    return items;
}

export function removeItemsByPrefix(prefix: string): void {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix)) {
            localStorage.removeItem(key);
        }
    }
}
