//ESERCIZIO 1 

// creo una classe di nome Utente e definisco ogni oggetto nel costruttore.

class Utente {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }

// creo una metodo che mi restituisce in console la comparazione dell'età compresa la frase che spiega se l'utente sia più vecchio o più giovane.

comparazione(otherUtente) {
    if (this.age > otherUtente.age) {
      return `${this.firstName} è più vecchio di ${otherUtente.firstName}`;
    } 
    else  
      return `${this.firstName} è più giovane di ${otherUtente.firstName}`;
    } 
  }

// creo delle varabili per riempire la classe.

const Sabri = new Utente("Sabri", "Zaltni", 24, "Ragusa");
const Francesco = new Utente("Francesco", "Cappello", 23, "Vittoria");
const Sara = new Utente("Sara", "Amiri", 22, "Comiso");
const Mario = new Utente("Mario", "Rossi", 30, "Roma");
const Luca = new Utente("Luca", "Verdi", 35, "Milano");

// stampo in console la comparazione tra i due utenti.

console.log(Sabri.comparazione(Francesco)); 
console.log(Francesco.comparazione(Sabri));
console.log(Sara.comparazione(Sabri)); 
console.log(Mario.comparazione(Luca)); 
console.log(Luca.comparazione(Sara)); 
console.log(Francesco.comparazione(Mario)); 

//ESERCIZIO 2

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  const petList = [];

  function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const pet = new Pet(petName, ownerName, species, breed);
    petList.push(pet);

    const petListElement = document.getElementById('petList');
    const newPetElement = document.createElement('li');
    newPetElement.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petListElement.appendChild(newPetElement);

    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
  }


  

