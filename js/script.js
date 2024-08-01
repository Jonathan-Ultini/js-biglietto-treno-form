// Aggiungiamo un evento di ascolto al bottone con id 'calculateBtn'.
// Quando viene cliccato, verrà eseguita la funzione anonima che segue.
document.getElementById('calculateBtn').addEventListener('click', function () {

  // Recuperiamo il valore dei chilometri dall'input con id 'kms' e lo convertiamo in un intero.
  const kms = parseInt(document.getElementById('kms').value.trim());

  // Recuperiamo il valore dell'età dall'input con id 'age' e lo convertiamo in un intero.
  const age = parseInt(document.getElementById('age').value.trim());

  // Controlliamo se i valori inseriti sono validi: devono essere numeri maggiori di 0.
  // Se non sono validi, mostriamo un messaggio di errore nella console e terminiamo la funzione.
  if (isNaN(kms) || kms <= 0 || isNaN(age) || age <= 0) {
    console.log('Per favore, inserisci valori validi.');
    return;
  }

  // Definiamo il prezzo per chilometro.
  const pricePerKm = 0.21;

  // Calcoliamo il prezzo totale senza sconto.
  let totalPrice = kms * pricePerKm;

  // Salviamo il prezzo totale senza sconto formattato con due decimali.
  const priceNoDiscount = totalPrice.toFixed(2);

  // Applichiamo lo sconto in base all'età del passeggero.
  // Se l'età è inferiore a 18 anni, applichiamo uno sconto del 20%.
  // Se l'età è superiore a 65 anni, applichiamo uno sconto del 40%.
  if (age < 18) {
    totalPrice *= 0.8;
  } else if (age > 65) {
    totalPrice *= 0.6;
  }

  // Formattiamo il prezzo finale con due decimali.
  const finalPrice = totalPrice.toFixed(2);

  // Mostriamo nella console i dettagli calcolati: chilometri, età, prezzo senza sconto e prezzo finale.
  console.log('Chilometri:', kms);
  console.log('Età:', age);
  console.log('Prezzo senza sconto:', priceNoDiscount);
  console.log('Prezzo finale:', finalPrice);
});
