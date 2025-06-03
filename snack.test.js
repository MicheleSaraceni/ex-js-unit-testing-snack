const { getInitials, createSlug, average, isPalindrome } = require("./snack")

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

//--------------------------------------------------------------------SNACK 5
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("osso")).toBeTruthy();
    expect(isPalindrome("femore")).toBeFalsy();
});

//--------------------------------------------------------------------SNACK 6
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow("Titolo non valido");
    expect(() => createSlug(null)).toThrow("Titolo non valido");
});