 // Recupera l'elemento del campo di input e il pulsante di salvataggio // Recupera l'elemento che mostra il nome salvato
const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");
const savedName = document.getElementById("saved-name");

// Carica il nome salvato dal localStorage, se presente
if (localStorage.getItem("name")) {
  savedName.textContent = localStorage.getItem("name");
}

// Aggiunge un event listener per il pulsante di salvataggio
saveButton.addEventListener("click", function() {
  // Salva il nome nel localStorage
  localStorage.setItem("name", nameInput.value);

  // Mostra il nome salvato sopra il campo di input
  savedName.textContent = localStorage.getItem("name");
});

// Aggiunge un event listener per il pulsante di cancellazione
clearButton.addEventListener("click", function() {
  // Rimuove il nome dall'localStorage
  localStorage.removeItem("name");

  // Rimuove il nome salvato sopra il campo di input
  savedName.textContent = "";
});


//TEMPO


  let tempoIniziale = sessionStorage.getItem("tempoIniziale");
  let tempoTrascorso = sessionStorage.getItem("tempoTrascorso") || 0;
  
  if (!tempoIniziale) {
    tempoIniziale = new Date();
    sessionStorage.setItem("tempoIniziale", tempoIniziale);
  }
  
  let intervallo = setInterval(function() {
    tempoTrascorso++;
    document.getElementById("tempoTrascorso").innerHTML = tempoTrascorso + " secondi";
    sessionStorage.setItem("tempoTrascorso", tempoTrascorso);
  }, 1000);
  
  window.onbeforeunload = function() {
    sessionStorage.clear();
    sessionStorage.setItem("tempoIniziale", tempoIniziale);
    sessionStorage.setItem("tempoTrascorso", tempoTrascorso);
  };
    