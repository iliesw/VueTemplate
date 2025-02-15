// Get a parent element by class name
export function getParentByClass<T extends HTMLElement>(element: HTMLElement, className: string): T | null {
    let parent = element.parentElement;
    while (parent) {
        if (parent.classList.contains(className)) {
            return parent as T;
        }
        parent = parent.parentElement;
    }
    return null;
}

// Get all children of an element that match a specific selector
export function getChildrenBySelector<T extends HTMLElement>(element: HTMLElement, selector: string): T[] {
    return Array.from(element.querySelectorAll(selector));
}

// Toggle visibility of an element
export function toggleVisibility(element: HTMLElement, isVisible: boolean): void {
    element.style.display = isVisible ? 'block' : 'none';
}

// Check if an element is in the viewport
export function isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Smooth scroll to an element
export function scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Add or remove a class from an element based on a condition
export function toggleClassConditionally(element: HTMLElement, className: string, condition: boolean): void {
    if (condition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}

// Debounce a function to prevent excessive function calls (e.g., during scrolling, resizing)
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: number | null = null;
    return (...args: Parameters<T>) => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(() => func(...args), wait);
    };
}

// Check if an element has a specific class
export function hasClass(element: HTMLElement, className: string): boolean {
    return element.classList.contains(className);
}

// Get computed style of an element
export function getComputedStyleValue(element: HTMLElement, property: string): string {
    return window.getComputedStyle(element).getPropertyValue(property);
}
