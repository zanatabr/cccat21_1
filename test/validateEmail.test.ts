import { validateEmail } from "../src/validateEmail";

test.each([
    "john.doe@gmail.com",
])("Deve validar o e-mail: %s", (email: string) => {
    const isValid = validateEmail(email);
    expect(isValid).toBe(true);
});



test.each([
    "john.doe@gmail",
    "john.doe@.com",
    "john.doe.com",
    "john..doe@com",
    "@gmail.com",
    "john.doe@",
])("Não deve validar o e-mail: %s", (email: string) => {
    const isValid = validateEmail(email);
    expect(isValid).toBe(false);
});