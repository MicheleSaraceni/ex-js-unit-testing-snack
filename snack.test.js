const { getInitials, createSlug, average } = require("./snack")

//--------------------------------------------------------------------SNACK 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Michele Saraceni")).toBe("MS");
});

//--------------------------------------------------------------------SNACK 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("CIAO A TUTTI")).toBe("ciao-a-tutti");
});

//--------------------------------------------------------------------SNACK 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
});

//--------------------------------------------------------------------SNACK 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("Facciamo UN TEST")).toBe("facciamo-un-test");
});