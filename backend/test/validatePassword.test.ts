import { validatePassword } from "../src/validatePassword";

test.each([
    "asdQWE123",
])("Deve validar a senha: %s", (password: string) => {
    const isValid = validatePassword(password);
    expect(isValid).toBe(true);
});



test.each([
    "ASDQWE123",
    "asdqwe123",
    "asdQWEasd",
    "asdQWE",
])("Não deve validar a senha: %s", (password: string) => {
    const isValid = validatePassword(password);
    expect(isValid).toBe(false);
});