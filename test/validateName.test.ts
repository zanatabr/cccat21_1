import { validateName } from "../src/validateName";

test.each([
    "John Doe",
    "Jane Smith Doe",
    "Alice Johnson Brown Jr",
])("Deve validar o nome: %s", (name: string) => {
    const isValid = validateName(name);
    expect(isValid).toBe(true);
});



test.each([
    "John",
    ""
])("Não deve validar o nome: %s", (name: string) => {
    const isValid = validateName(name);
    expect(isValid).toBe(false);
});