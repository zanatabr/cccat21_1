import axios from "axios";

axios.defaults.validateStatus = () => true;

test("Deve criar uma conta", async () => {
    // given
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "asdQWE123"
    };

    // when
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    const outputSignup = responseSignup.data;
    const responseGetAccount = await axios.get(`http://localhost:3000/accounts/${outputSignup.accountId}`);
    const outputGetAccount = responseGetAccount.data;

    // then
    expect(outputSignup.accountId).toBeDefined();
    expect(outputGetAccount.name).toBe(input.name);
    expect(outputGetAccount.email).toBe(input.email);
    expect(outputGetAccount.document).toBe(input.document);
    expect(outputGetAccount.password).toBe(input.password);
});

test("Não deve criar uma conta se o nome for inválido", async () => {
    const input = {
        name: "John",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "asdQWE123"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid name");
});

test("Não deve criar uma conta se o e-mail for inválido", async () => {
    const input = {
        name: "John Doe",
        email: "john.doe@gmail",
        document: "97456321558",
        password: "asdQWE123"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid email");
});

test("Não deve criar uma conta se o documento for inválido", async () => {
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "9745632155",
        password: "asdQWE123"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid document");
});

test("Não deve criar uma conta se a senha tiver menos do que 8 caracteres", async () => {
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "asdQWE"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid password");
});

test("Não deve criar uma conta se a senha tiver não tiver números", async () => {
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "asdQWEasd"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid password");
});

test("Não deve criar uma conta se a senha tiver não tiver letras maiúsculas", async () => {
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "asdqwe123"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid password");
});

test("Não deve criar uma conta se a senha tiver não tiver letras minúsculas", async () => {
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "ASDQWE123"
    };
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    expect(responseSignup.status).toBe(422);
    const outputSignup = responseSignup.data;
    expect(outputSignup.message).toBe("Invalid password");
});