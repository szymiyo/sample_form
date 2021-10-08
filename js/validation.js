/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Yax | Software House Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia :)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


// Funkcja walidująca po naciśnięciu przycisku "Wyślij"

$('#submit').on('click', function() {
    valid = true;   

    // Warunek, aby pole nie mogło być puste
    if ($('#name').val().length == '') {

        alert ("Wprowadź swoje imię.");
        valid = false;
    }

    //Warunek sprawdzający, czy w imieniu znajdują się znaki inne niż litery
    if ($('#name').val().match(/^[a-zA-Z\s]+$/)) {
        valid= true;
    } else {
        alert ("Imię zawiera niedozwolone znaki.");
         valid = false;
    }

    // Warunek, aby pole nie mogło być puste (inna metoda sprawdzenia)
    if ($('#surname').val() <= 0) {
        alert ("Wprowadź swoje nazwisko.");
         valid = false;
    } 

     //Warunek sprawdzający, czy w nazwisku znajdują się znaki inne niż litery
     if ($('#name').val().match(/^[a-zA-Z\s]+$/)) {
        valid= true;
    } else {
        alert ("Nazwisko zawiera niedozwolone znaki.");
         valid = false;
    }

    // Warunek, aby pole nie mogło być puste
    if ($('#phone').val() == '') {
        alert ("Wprowadź swój numer telefonu.");
         valid = false;
    }   
    // Warunek, aby pole zawierało tylko cyfry
    if ($('#phone').val().match(/^[a-zA-Z\s]+$/)) {
        alert ("Wprowadź swój numer telefonu.");
         valid = false;
    }   

    // Warunek, aby pole nie mogło być puste
    if ($('#email').val() == '') {
        alert ("Wprowadź swoj e-mail.");
         valid = false;
    } 
    
    //Warunek sprawdzajacy, czy wartosc ma postac xyz@domain.com
    if ($('#email').val().match(/^\S+@\S+\.\S+$/)) {
        alert ("Wprowadź swoj e-mail.");
         valid = false;
    }

});