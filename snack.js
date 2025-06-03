//--------------------------------------------------------------------SNACK 1
function getInitials(nomecognome) {
    const [nome, cognome] = nomecognome.split(" ");
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

//--------------------------------------------------------------------SNACK 2
function createSlug(stringa) {
    return `${stringa.toLowerCase()}`
}


module.exports = {
    getInitials,
    createSlug,
}
