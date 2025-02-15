export function hexToRgb(hex: string): [number, number, number] | null {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
        hex = hex.split("").map(c => c + c).join("");
    }
    if (hex.length !== 6) return null;
    
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b];
}

export function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export function lighten(hex: string, percent: number): string | null {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    
    const [r, g, b] = rgb.map(channel => 
        Math.min(255, Math.floor(channel + (255 - channel) * (percent / 100)))
    );
    
    return rgbToHex(r, g, b);
}

export function darken(hex: string, percent: number): string | null {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    
    const [r, g, b] = rgb.map(channel => 
        Math.max(0, Math.floor(channel * (1 - percent / 100)))
    );
    
    return rgbToHex(r, g, b);
}

export function contrastColor(hex: string): string {
    const rgb = hexToRgb(hex);
    if (!rgb) return "#000000";
    
    const [r, g, b] = rgb;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export function generateShades(hex: string, steps: number = 5): string[] {
    return Array.from({ length: steps }, (_, i) => darken(hex, (i + 1) * 10) ?? hex);
}

export function generateTints(hex: string, steps: number = 5): string[] {
    return Array.from({ length: steps }, (_, i) => lighten(hex, (i + 1) * 10) ?? hex);
}

export function randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgbToHex(r, g, b);
}

export function randomColorFromString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const r = (hash & 0xFF0000) >> 16;
    const g = (hash & 0x00FF00) >> 8;
    const b = hash & 0x0000FF;
    
    return rgbToHex(r, g, b);
}
