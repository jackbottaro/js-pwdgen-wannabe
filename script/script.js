console.log(`JS OK`)

/*
1 Chiedi all’utente il suo nome,
2 poi chiedi il suo cognome,
3 poi chiedi il suo colore preferito
4 Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

// 1 Chiedi all’utente il suo nome
const firstName = prompt(`Qual è il tuo nome?`);
console.log(firstName)

// 2 poi chiedi il suo cognome
const lastName = prompt('Qual è il tuo cognome?');
console.log(lastName)

// 3 poi chiedi il suo colore preferito
const favColor = prompt('Qual è il tuo colore preferito?');
console.log(favColor)

// 4 Infine scrivi sulla pagina nomecognomecolorepreferito21
const passwordElement = document.getElementById("password");

passwordElement.innerHTML = "La tua password è" + " " + firstName + lastName + favColor + 21;


