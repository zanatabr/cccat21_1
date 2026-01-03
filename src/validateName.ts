export function validateName(name: string) {
    return (/[A-Z][a-z]+ [A-Z][a-z]+/).test(name);
}