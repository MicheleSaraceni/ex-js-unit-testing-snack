const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snack")



describe("Stringhe", () => {
    //--------------------------------------------------------------------SNACK 1
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials("Michele Saraceni")).toBe("MS");
    });

    //--------------------------------------------------------------------SNACK 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("osso")).toBeTruthy();
        expect(isPalindrome("femore")).toBeFalsy();
    });
})



describe("Array", () => {
    //--------------------------------------------------------------------SNACK 3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    //--------------------------------------------------------------------SNACK 7
    const posts = [
        { id: 1, title: "Le mele piu belle", slug: "le-mele-piu-belle" },
        { id: 2, title: "I cocomeri piu tondi", slug: "i-cocomeri-piu-tondi" },
        { id: 3, title: "Le albicocche piu arancioni", slug: "le-albicocche-piu-arancioni" }
    ]
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 3)).toEqual({ id: 3, title: "Le albicocche piu arancioni", slug: "le-albicocche-piu-arancioni" });
        expect(() => findPostById(["Ciao", 3, { Nome: "luca" }], 3)).toThrow("Dati passati non validi")
        expect(() => findPostById(posts, "3")).toThrow("Dati passati non validi")
    });
})



describe("slug", () => {
    //--------------------------------------------------------------------SNACK 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug("CIAO A TUTTI")).toBe("ciao-a-tutti");
    });



    //--------------------------------------------------------------------SNACK 4
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug("Facciamo UN TEST")).toBe("facciamo-un-test");
    });



    //--------------------------------------------------------------------SNACK 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow("Titolo non valido");
        expect(() => createSlug(null)).toThrow("Titolo non valido");
    });

})



