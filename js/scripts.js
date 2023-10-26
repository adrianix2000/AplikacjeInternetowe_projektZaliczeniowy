/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// obsługa SPA na stronie głównej
function pokaz_poprzednie() {

    var tresc = '<div class="odstep row justify-content-center">' + 
                    '<div class="col-md-8 align-items-center">' + 
                        '<p class="kontent">' + 
                            'Jaki powinien być ogród idealny? Piękny i funkcjonalny zarazem. Rośliny powinny Ci się podobać, ale muszą także pasować do Twojego stylu życia. Jeśli często wyjeżdżasz i nie możesz opiekować się florą ogrodową – postaw na rośliny, które nie wymagają regularnego podlewania. Jeśli nie lubisz prac ogrodowych – zrezygnuj z tych krzewów i kwiatów, które trzeba regularnie nawozić i przesadzać' + 
                        '</p></br>' + 
                    '</div>' + 
                '</div>' + 
                '<div class="odstep row justify-content-center gx-7 gy-15 align-items-center">' + 
                    '<div class="col-md-4">' + 
                        '<div class="obrazek">' + 
                            '<img class="img-fluid" src="images/ogrod2.jpg" id="obraz1" alt="..." />' + 
                        '</div>' +        
                    '</div>' + 
                    '<div class="col-md-4">' + 
                        '<p class="kontent">' + 
                            'Koszt założenia ogrodu, podobnie jak koszt budowy domu, jest zależny od wielu czynników. Kluczowe znaczenie ma wielkość działki, zakres i stopień skomplikowania prac czy jakość zastosowanych materiałów. Na cenę wpływają również takie czynniki jak sposób ukształtowania terenu, region.' + 
                        '</p></br></br>' + 
                    '</div>' + 
                '</div>' + 
                '<div class="odstep row justify-content-center gy-15">' + 
                    '<div class="col-md-8 align-items-center">' + 
                        '<p class="kontent">' + 
                            'Jaki powinien być ogród idealny? Piękny i funkcjonalny zarazem. Rośliny powinny Ci się podobać, ale muszą także pasować do Twojego stylu życia. Jeśli często wyjeżdżasz i nie możesz opiekować się florą ogrodową – postaw na rośliny, które nie wymagają regularnego podlewania. Jeśli nie lubisz prac ogrodowych – zrezygnuj z tych krzewów i kwiatów, które trzeba regularnie nawozić i przesadzać.' + 
                        '</p></br>' + 
                    '</div>' + 
                '</div>' + 
                '<div class="odstep row justify-content-center">' + 
                    '<div class="col-md-12" style="text-align: center;">' + 
                        '<button class="strona_glowna_przycisk" onclick="pokaz_nastepne()" >Czytaj następne</button>' + 
                    '</div>' + 
                '</div>';

    document.getElementById('glowny-artykul').innerHTML = tresc;
    window.scrollTo(0,0);
}

function pokaz_nastepne() {

    var tresc = '<div class="odstep row justify-content-center">' + 
                '<div class="col-md-8 align-items-center">' + 
                '<p class="kontent">' + 
                    'Nie wiesz, jakie rośliny posadzić lub zasiać w swoim ogrodzie? Może warto postawić na te najpopularniejsze? Oczywiście ostateczny wygląd ogrodu zależy od Twoich preferencji. Jednak bardzo często określone okazy występują w wielu aranżacjach nie bez przyczyny – często nie dość, że są piękne, to nie wymagają skomplikowanej pielęgnacji.' + 
                '</p></br>' + 
                '</div>' + 
                '</div>' + 
                    '<div class="odstep row justify-content-center">' + 
                        '<div class="col-md-8 align-items-center">' + 
                            '<p class="kontent">' + 
                                'Warto pomyśleć o żywopłocie, który uchroni Cię przed wzrokiem sąsiadów i przechodniów. Na jakie rośliny najlepiej postawić? Oto kilka rodzajów roślin które utworzą piękny żywopłot w twoim ogrodzie:' + 
                                '<ul class="kontent-lista">' + 
                                    '<li>Tuja - doskonale nadaje się do tworzenia gęstego żywopłotu</li>' + 
                                    '<li>Berberys - są trwałe i odporne na susze a także zapewiają ochronę ze względu na swoje kolczaste liście</li>' + 
                                    '<li>Cis pospolity - jest popularny ze względu na swój estetyczny wygląd i zdolność do przycinania</li>' + 
                                    '<li>Żywotnik zachodni - Jest to duże drzewo iglaste, które nadaje się zarówno do większych żywopłotów, jak i pojedynczych roślin. Żywotnik zachodni jest szybko rosnący i ma gęste gałęzie, które zapewniają prywatność.</li>' + 
                                '</ul>' + 
                            '</p></br>' + 
                        '</div>' + 
                    '</div>' + 
                    '<div class="odstep row justify-content-center gx-7 gy-15 align-items-center">' + 
                        '<div class="col-md-4">' + 
                            '<div class="obrazek">' + 
                                '<img class="img-fluid" src="images/zywoplot_tuja.jpg" id="obraz1" alt="..." />' + 
                            '</div>' +       
                        '</div>' + 
                        '<div class="col-md-4">' + 
                            '<p class="kontent">' + 
                                'Tujowy żywopłot można przycinać do pożądanej wysokości. W przypadku większości odmian tui, wysokość żywopłotu może wynosić od kilku metrów do nawet kilkunastu metrów.' + 
                            '</p></br>' + 
                        '</div>' + 
                    '</div>' + 
                    '<div class="odstep row justify-content-center gy-15">' + 
                        '<div class="col-md-8 align-items-center">' + 
                            '<p class="kontent">' + 
                                'Nie każdy lubi działania takie jak: przesadzanie, podlewanie i pielęgnowanie roślin. Mamy jednak porady dla takich osób. Możecie wybrać kwiaty, które wymagają absolutnego minimum pielęgnacji!. Oto kilka propozycji kwaitów które będą idealnie prezentować się w każdym ogórdku.' + 
                            '</p></br>' + 
                        '</div>' + 
                    '</div>' + 
                    '<div class="odstep row justify-content-center gx-7 gy-15 align-items-center">' + 
                        '<div class="col-md-4">' + 
                            '<p class="kontent">' + 
                                'Stokrotki kwitną wiosną i latem, tworząc kolorowe dywany małych kwiatów. Wymagają pełnego słońca lub lekkiego zacienienia i dobrze rosną w większości typów gleb. Nie potrzebują częstego podlewania i mogą być pozostawione w spokoju, aby rosnąć naturalnie.' + 
                            '</p></br>' + 
                        '</div>' + 
                        '<div class="col-md-4">' + 
                            '<div class="obrazek">' + 
                                '<img class="img-fluid" src="images/stokrotki.jpg" id="obraz1" alt="..." />' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>' + 

                    '<div class="odstep row justify-content-center">' + 
                        '<div class="col-md-12 align-items-center" style="text-align: center;">' + 
                            '<button class="strona_glowna_przycisk" onclick="pokaz_poprzednie()">Czytaj następne</button>' + 
                        '</div>' + 
                    '</div>'; 

    document.getElementById('glowny-artykul').innerHTML = tresc;
    window.scrollTo(0,0);
}


// Walidacja formaularza


function sprawdzPoleTekstowe(pole_id, obiektRegex) {
    var wartoscPolaTekstowego=document.getElementById(pole_id).value;
    return obiektRegex.test(wartoscPolaTekstowego);
}



function sprawdzRadioBox(radioName) {
    var radioElements=document.getElementsByName(radioName);
    var result=false;
    for(var i=0; i<radioElements.length; i++) {
        if(radioElements[i].checked)
            result=radioElements[i].value;
    }
    return result;
}

function zbierzWartosciCheckBox(checkBoxName) {
    var checkBoxElements=document.getElementsByName("zainteresowanie");
    var result=[];
    for(var i=0; i<checkBoxElements.length; i++) {
        if(checkBoxElements[i].checked)
            result.push(checkBoxElements[i].value);
    }
    return result;
}


class Uzytkownik {
    constructor(imie, nazwisko, dataUrodzenia, email, miasto, telefon, doswiadczenie, zainteresowania) {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.dataUrodzenia=dataUrodzenia;
        this.email=email;
        this.miasto=miasto;
        this.telefon=telefon;
        this.doswiadczenie=doswiadczenie;
        this.zainteresowania=zainteresowania;
    }
}


// MODYFIKOWANIE UŻYTKOWANIKA
function modyfikujUzytkownika(numer, rodzajPamieci) {
    var uzytkownicy;
    if(rodzajPamieci == 1) {
        uzytkownicy = JSON.parse(localStorage.getItem('users'));
    } else {
        uzytkownicy = JSON.parse(sessionStorage.getItem('users'));
    }
    if (uzytkownicy != null && uzytkownicy.length > numer) {
        var uzytkownik = uzytkownicy[numer];
        
        sessionStorage.setItem('modyfikowany', JSON.stringify(uzytkownik));
        sessionStorage.setItem('indexModyfikowanego', numer);

        if(rodzajPamieci == 1) {
            sessionStorage.setItem('rodzajPamieci', 'local');
        }
        else {
            sessionStorage.setItem('rodzajPamieci', 'session');
        }

        window.open("modyfikacja.html");
        window.opener = null;
        window.open('', '_self');
        window.close();
    }
}

function modyfikacjaOnLoad() {
    var uzytkownik = JSON.parse(sessionStorage.getItem('modyfikowany'));

    document.getElementById("imie").value=uzytkownik.imie;
    document.getElementById("nazwisko").value=uzytkownik.nazwisko;
    document.getElementById("email").value=uzytkownik.email;
    document.getElementById("miasto").value=uzytkownik.miasto;
    document.getElementById("telefon").value=uzytkownik.telefon;
    document.getElementById("data-urodzenia").value=uzytkownik.dataUrodzenia;
    document.getElementById(uzytkownik.doswiadczenie).checked=true;

    for(var i=0; i<uzytkownik.zainteresowania.length; i++) {
        document.getElementById(uzytkownik.zainteresowania[i]).checked=true;
    }
}

function zmodyfikujLocalStorage(imie, nazwisko, dataUrodzenia,  email, miasto, telefon, doswiadczenie, zainteresowania, rodzajPamieci) {

    var uzytkownicy;
    if(rodzajPamieci == 1) {
        uzytkownicy=JSON.parse(localStorage.getItem('users'));
    } else {
        uzytkownicy=JSON.parse(sessionStorage.getItem('users'));
    }
    if(uzytkownicy!=null) {
        var index = sessionStorage.getItem('indexModyfikowanego');

        uzytkownicy[index].imie=imie;
        uzytkownicy[index].nazwisko=nazwisko;
        uzytkownicy[index].dataUrodzenia=dataUrodzenia;
        uzytkownicy[index].email=email;
        uzytkownicy[index].miasto=miasto;
        uzytkownicy[index].telefon=telefon;
        uzytkownicy[index].doswiadczenie=doswiadczenie;
        uzytkownicy[index].zainteresowania=zainteresowania;

        if(rodzajPamieci == 1) {
            localStorage.setItem('users', JSON.stringify(uzytkownicy));
        } else {
            sessionStorage.setItem('users', JSON.stringify(uzytkownicy));
        }

        document.getElementById('modyfikacja-success-komunikat').innerHTML="Zmodyfikowano dane użytkownika.";
    }    
}

function wyswietlUzytkownikow(opcja) {
    var uzytkownicy;
    if(opcja == 1) {
       uzytkownicy = JSON.parse(localStorage.getItem('users'));
    } else {
        uzytkownicy = JSON.parse(sessionStorage.getItem('users'));
    }
    if (uzytkownicy != null) {

        console.log(opcja);

        document.getElementById("tabelaUzytkownikow").innerHTML='<thead>'+
                                        '<tr>'+
                                            '<th>Imie</th>' + 
                                            '<th>Nazwisko</th>'+
                                            '<th>Email</th>' + 
                                        '</tr>'+
                                    '</thead>';

        var tabelka = document.getElementById("tabelaUzytkownikow");


        for (var i = 0; i < uzytkownicy.length; i++) {
            var nowyWiersz = tabelka.insertRow();
  
            var komorka1 = nowyWiersz.insertCell(0);
            var komorka2 = nowyWiersz.insertCell(1);
            var komorka3 = nowyWiersz.insertCell(2);
            var komorka4 = nowyWiersz.insertCell(3);

            komorka1.innerHTML = uzytkownicy[i].imie;
            komorka2.innerHTML = uzytkownicy[i].nazwisko;
            komorka3.innerHTML = uzytkownicy[i].email;

            if(opcja == 1) {
                komorka4.innerHTML = '<button class="przycisk_usun" onclick="usunUzytkownika('+i+')">Usuń</button>'
                                    + '<button class="przycisk_modyfikuj" onclick="modyfikujUzytkownika('+i+','+1+')">Modyfikuj</button>';
            } else {
                komorka4.innerHTML = '<button class="przycisk_usun" onclick="usunUzytkownikaZSessionStorage('+i+')">Usuń</button>'
                                 + '<button class="przycisk_modyfikuj" onclick="modyfikujUzytkownika('+i+','+2+')">Modyfikuj</button>';
            }
        }
    }
}


// USUWANIE UŻYTKOWNIKA
function usunUzytkownika(numer) {
    var uzytkownicy = JSON.parse(localStorage.getItem('users'));
    if(uzytkownicy != null) {
        uzytkownicy.splice(numer, 1);
        localStorage.setItem('users', JSON.stringify(uzytkownicy));
        wyswietlUzytkownikow(1);
    }
}



function usunUzytkownikaZSessionStorage(numer) {
    var uzytkownicy = JSON.parse(sessionStorage.getItem('users'));
    if(uzytkownicy != null) {
        uzytkownicy.splice(numer, 1);
        sessionStorage.setItem('users', JSON.stringify(uzytkownicy));
        wyswietlUzytkownikow(2);
    }
}


function dodajDoLocalStorage(imie, nazwisko, dataUrodzenia,  email, miasto, telefon, doswiadczenie, zainteresowania) {
    var uzytkownik=new Uzytkownik(imie, nazwisko, dataUrodzenia, email, miasto, telefon, doswiadczenie, zainteresowania);

    var uzytkownicy=JSON.parse(localStorage.getItem('users'));
    if(uzytkownicy==null)
        uzytkownicy=[];
    
    uzytkownicy.push(uzytkownik);

    localStorage.setItem('users', JSON.stringify(uzytkownicy));

    console.log(localStorage);

    wyswietlUzytkownikow();
}


function dodajDoSessionStorage(imie, nazwisko, dataUrodzenia,  email, miasto, telefon, doswiadczenie, zainteresowania) {
    var uzytkownik=new Uzytkownik(imie, nazwisko, dataUrodzenia, email, miasto, telefon, doswiadczenie, zainteresowania);

    var uzytkownicy=JSON.parse(sessionStorage.getItem('users'));
    if(uzytkownicy==null)
        uzytkownicy=[];
    
    uzytkownicy.push(uzytkownik);
    sessionStorage.setItem('users', JSON.stringify(uzytkownicy));

    console.log(sessionStorage);
    wyswietlUzytkownikow();
}


function sprawdzFormularz(akcja) {
    var poprawny=true;

    regexImie=/^[a-zA-Z]{2,20}$/;
    regexNazwisko=/^[a-zA-Z]{2,30}$/;
    regexEmail=/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    regexTelefon=/^\d{3} \d{3} \d{3}$/;


    if(!sprawdzPoleTekstowe("imie", regexImie)) {
        poprawny=false;
        document.getElementById("imie-error").innerHTML="Podaj poprawne imie";
    } else {
        document.getElementById("imie-error").innerHTML="";
    }

    if(!sprawdzPoleTekstowe("nazwisko", regexNazwisko)) {
        poprawny=false;
        document.getElementById("nazwisko-error").innerHTML="Podaj poprawne nazwisko";
    } else {
        document.getElementById("nazwisko-error").innerHTML="";
    }

    if(!sprawdzPoleTekstowe("email", regexEmail)) {
        poprawny=false;
        document.getElementById("email-error").innerHTML="Podaj poprawny adres email";
    } else {
        document.getElementById("email-error").innerHTML="";
    }

    if(!sprawdzPoleTekstowe("telefon", regexTelefon)) {
        poprawny=false;
        document.getElementById("telefon-error").innerHTML = "Podaj poprawny numer telefonu";
    } else {
        document.getElementById("telefon-error").innerHTML = "";
    }

    if(!sprawdzRadioBox("doswiadczenie")) {
        poprawny=false;
        document.getElementById("doswiadczenie-error").innerHTML = "Określ swoje doświadczenie";
    } else {
        document.getElementById("doswiadczenie-error").innerHTML = "";
    }

    if(document.getElementById("data-urodzenia").value == "") {
        poprawny=false;
        document.getElementById("data-error").innerHTML = "Podaj poprawną datę urodzenia";
    } else {
        document.getElementById("data-error").innerHTML = "";
    }

    var temp=document.getElementById("data-urodzenia").value;
    console.log(temp);

    console.log(poprawny);

    if(poprawny) {

        var imieTemp=document.getElementById("imie").value;
        var nazwiskoTemp=document.getElementById("nazwisko").value;
        var emailTemp=document.getElementById("email").value;
        var telefonTemp=document.getElementById("telefon").value;
        var doswiadczenieTemp=sprawdzRadioBox("doswiadczenie");
        var zainteresowanieTemp=zbierzWartosciCheckBox("zainteresowanie");
        var dataUrodzeniaTemp=document.getElementById("data-urodzenia").value;
        var miastoTemp=document.getElementById("miasto").value;

        if(akcja == 1) {
            dodajDoLocalStorage(imieTemp, nazwiskoTemp, dataUrodzeniaTemp, emailTemp, miastoTemp, telefonTemp, doswiadczenieTemp, zainteresowanieTemp);

        } else if (akcja == 2){
            var rodzajPamieci = sessionStorage.getItem('rodzajPamieci');
            if(rodzajPamieci == 'local') {
                zmodyfikujLocalStorage(imieTemp, nazwiskoTemp, dataUrodzeniaTemp,  emailTemp, miastoTemp, telefonTemp, doswiadczenieTemp, zainteresowanieTemp, 1);
            }
            else {
                zmodyfikujLocalStorage(imieTemp, nazwiskoTemp, dataUrodzeniaTemp,  emailTemp, miastoTemp, telefonTemp, doswiadczenieTemp, zainteresowanieTemp, 2);
            }
        } 
        else {
            dodajDoSessionStorage(imieTemp, nazwiskoTemp, dataUrodzeniaTemp, emailTemp, miastoTemp, telefonTemp, doswiadczenieTemp, zainteresowanieTemp);
        }
    } 
}

document.addEventListener("DOMContentLoaded", function() {
    var but1 = document.getElementById("kontakt");
        but1.addEventListener('click', function(){
    fetch("http://localhost/Projekt/kontakt.txt")
    .then( response => {return response.text();} )
    .then( dane => { document.getElementById("page-top").innerHTML = dane; })
    }, false);
})
   


