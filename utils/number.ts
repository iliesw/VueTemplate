export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

export function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function roundToDecimal(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

export function isEven(value: number): boolean {
    return value % 2 === 0;
}

export function isOdd(value: number): boolean {
    return !isEven(value);
}

export function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

export function lcm(a: number, b: number): number {
    return Math.abs(a * b) / gcd(a, b);
}

export function fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function averageArray(numbers: number[]): number {
    return numbers.length ? sumArray(numbers) / numbers.length : 0;
}
