/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Yax | Software House Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia :)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// Definicja walidacji sprawdzajaca czy imie sklada sie tylko z liter
jQuery.validator.addMethod("just_letters_name", function(value, element) {
    return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "Twoje imię zawiera niedozwolony znak.");

// Definicja walidacji sprawdzajaca czy nazwisko sklada sie tylko z liter
jQuery.validator.addMethod("just_letters_surname", function(value, element) {
    return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "Twoje nazwisko zawiera niedozwolony znak.");

$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
            // Pole nie może być puste
            required: true,
            // Minimalna ilość znaków wynosi 3
            minlength: 3,
            // Wykorzystanie zdefiniowanej walidacji
            just_letters_name: true
        },
        surname: {
            // Pole nie może być puste
            required: true,
            // Minimalna ilość znaków wynosi 3
            minlength: 3,
            // Wykorzystanie zdefiniowanej walidacji
            just_letters_surname: true
        },
        phone : {
            // Pole nie może byćpuste
            required: true,
            // Pole może zawierać tylko cyfry
            pattern: /^[0-9]+$/
        },
        email: {
            // Pole wymagane
            required: true,
            email: true
        },
      },
      //Wiadomości walidacji
      messages : {
        name: {
            required: "Pole nie może być puste.",
            minlength: "Imię musi zawierać co najmniej 3 znaki."
        },
        surname: {
            required: "Pole nie może być puste.",
            minlength: "Nazwisko musi zawierać co najmniej 3 znaki."
        },
        phone: {
            required: "Pole nie może być puste.",
            pattern: "Zły format numeru telefonu."
        },
        email: {
            required: "Pole nie może być puste.",
            email: "Zły format e-mail."
        },
      }
    });
  });

  // Funkcja sprawdzająca, czy przynajmniej 1 checkbox jest zaznaczony
  $("#basic-form").submit(function(){
    var checked = $("#basic-form input:checked").length > 0;
    if (!checked){
        alert("Please check at least one checkbox");
        return false;
    }
});