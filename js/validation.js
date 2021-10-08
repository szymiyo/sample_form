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
        $('#error_msg_name').html('Wprowadź swoje imię.');
        $('#error_msg_name').css('color', 'red');
        $('#error_msg_name').css('margin-top', '15px');
        return false;
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
     if ($('#surname').val().match(/^[a-zA-Z\s]+$/)) {
        valid= true;
    } else {
        alert ("Nazwisko zawiera niedozwolone znaki.");
         valid = false;
    }

    // Warunek, aby pole nie mogło być puste
    if ($('#email').val() == '') {
        alert ("Wprowadź swoj e-mail.");
         valid = false;
    } 
    
    //Warunek sprawdzajacy, czy wartosc ma postac xyz@domain.com
    if ($('#email').val().match(/^\S+@\S+\.\S+$/)) {
        alert ("Tak nie wygląda email.");
         valid = false;
    }

    // Warunek, aby pole nie mogło być puste
    if ($('#phone').val() == '') {
        $('#error_msg_phone').html('Wprowadź swój numer telefonu.');
        $('#error_msg_phone').css('color', 'red');
        $('#error_msg_phone').css('margin-top', '15px');
        return false;
    }   
    // Warunek, aby pole zawierało tylko cyfry
    if ($('#phone').val().match(/^[0-9]*$/)) {
        return true;
    }   else {
        $('#error_msg_phone').html('Numer zawiera niedozwolone znaki.');
        $('#error_msg_phone').css('color', 'red');
        $('#error_msg_phone').css('margin-top', '15px');
        return false;
    }

});