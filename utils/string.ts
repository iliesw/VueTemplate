export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelToKebab(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function kebabToCamel(str: string): string {
    return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export function truncate(str: string, length: number): string {
    return str.length > length ? str.slice(0, length) + "..." : str;
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalized === reverseString(normalized);
}

export function countOccurrences(str: string, subStr: string): number {
    return str.split(subStr).length - 1;
}

export function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function removeWhitespace(str: string): string {
    return str.replace(/\s+/g, '');
}

export function randomString(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}