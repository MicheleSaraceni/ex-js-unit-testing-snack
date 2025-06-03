//--------------------------------------------------------------------SNACK 1
function getInitials(nomecognome) {
    const [nome, cognome] = nomecognome.split(" ");
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

//--------------------------------------------------------------------SNACK 2, 4 e 6
function createSlug(stringa) {
    if (!stringa) {
        throw new Error("Titolo non valido")
    }
    return `${stringa.toLowerCase().replaceAll(" ", "-")}`
}

//--------------------------------------------------------------------SNACK 3
function average(arrayNum) {
    const somma = arrayNum.reduce((acc, n) => acc + n, 0)
    return somma / arrayNum.length
}

//--------------------------------------------------------------------SNACK 5
function isPalindrome(stringa) {
    const inversione = stringa.split("").reverse().join("");
    return stringa === inversione
}




module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}
