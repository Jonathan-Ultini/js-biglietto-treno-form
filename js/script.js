// Aggiungiamo un evento di ascolto al bottone con id 'calculateBtn'.
// Quando viene cliccato, verrà eseguita la funzione anonima che segue.
document.getElementById('calculateBtn').addEventListener('click', function () {

  // Recuperiamo il valore del nome dall'input con id 'name'.
  const name = document.getElementById('name').value.trim();

  // Recuperiamo il valore dei chilometri dall'input con id 'kms' e lo convertiamo in un intero.
  const kms = parseInt(document.getElementById('kms').value);

  // Recuperiamo il valore dell'età dall'input con id 'age' e lo convertiamo in un intero.
  const ageCategory = document.getElementById('age').value;

  // Controlliamo se i valori inseriti sono validi: devono essere numeri maggiori di 0.
  // Se non sono validi, mostriamo un messaggio di errore nella console e terminiamo la funzione.
  if (!name || isNaN(kms) || kms <= 0 || !ageCategory) {
    alert('Per favore, inserisci valori validi.');
    return;
  }

  // Definiamo il prezzo per chilometro.
  const pricePerKm = 0.21;

  // Calcoliamo il prezzo totale senza sconto.
  let totalPrice = kms * pricePerKm;

  // Salviamo il prezzo totale senza sconto formattato con due decimali.
  const priceNoDiscount = totalPrice.toFixed(2);

  // Applicazione dello sconto basato sull'età
  if (ageCategory === 'minor') {
    totalPrice *= 0.8; // Sconto del 20% per i minorenni
  } else if (ageCategory === 'senior') {
    totalPrice *= 0.6; // Sconto del 40% per gli over 65
  }

  // Formattiamo il prezzo finale con due decimali.
  const finalPrice = totalPrice.toFixed(2);

  //creiamo usando la funzone random dei numeri per le due variabili
  const carriageNumber = Math.floor(Math.random() * 10) + 1;
  const passengerCode = '9' + Math.floor(Math.random() * 90000 + 10000);

  //assegniamo i valori neccessari da mostrare in pagina
  document.getElementById('nameResult').innerText = name;
  document.getElementById('kmResult').innerText = kms;
  document.getElementById('ageResult').innerText = ageCategory;
  document.getElementById('priceNoDiscountResult').innerText = priceNoDiscount;
  document.getElementById('finalPriceResult').innerText = finalPrice;
  document.getElementById('carriageNumber').innerText = carriageNumber;
  document.getElementById('passengerCode').innerText = passengerCode;
});


//risultato bottone annulla
document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('ticketForm').reset();
  document.getElementById('nameResult').textContent = '';
  document.getElementById('kmResult').textContent = '';
  document.getElementById('ageResult').textContent = '';
  document.getElementById('priceNoDiscountResult').textContent = '';
  document.getElementById('finalPriceResult').textContent = '';
  document.getElementById('carriageNumber').textContent = '';
  document.getElementById('passengerCode').textContent = '';
});