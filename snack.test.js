const { getInitials } = require("./snack")

//--------------------------------------------------------------------SNACK 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Michele Saraceni")).toBe("MS");
});