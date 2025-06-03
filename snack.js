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

//--------------------------------------------------------------------SNACK 7
function findPostById(posts, id) {

    posts.forEach(post => {
        if (post.id === undefined || post.title === undefined || post.slug === undefined) {
            throw new Error("Dati passati non validi")
        }
    })


    if (typeof id !== "number") {
        throw new Error("Dati passati non validi")
    }

    return posts.find(post => post.id === id);
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}
