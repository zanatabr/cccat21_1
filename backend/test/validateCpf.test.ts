import { validateCpf } from "../src/validateCpf";

test.each([
    "97456321558",
    "71428793860",
    "87748248800",
])("Deve testar um cpf válido: %s", (cpf: string) => {
    // when
    const isValid = validateCpf(cpf);
    // then
    expect(isValid).toBe(true);
});

test.each([
    null,
    undefined,
    "",
    "11111111111",
    "111",
    "11111111111111",
])("Deve testar um cpf inválido: %s", (cpf: any) => {
    // when
    const isValid = validateCpf(cpf);
    // then
    expect(isValid).toBe(false);
});