//--------------------------------------------------------------------SNACK 1
function getInitials(nomecognome) {
    const [nome, cognome] = nomecognome.split(" ");
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

//--------------------------------------------------------------------SNACK 2
function createSlug(stringa) {
    return `${stringa.toLowerCase()}`
}

//--------------------------------------------------------------------SNACK 3
function average(arrayNum) {
    const somma = arrayNum.reduce((acc, n) => acc + n, 0)
    return somma / arrayNum.length
}


module.exports = {
    getInitials,
    createSlug,
    average,
}
