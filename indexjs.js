let isEnglish = true;

function yahooClick() {
    var yahoo = document.getElementById("yahoo");
    yahoo.play();
}

function langEng() {
    var intro = document.getElementById("intro");
    var hi = document.getElementById("hithere");
    var book = document.getElementById("bookTitle");
    var englishText = "I'm puppet/puppetizer/pupp3t1z3r, an artist that loves outdated memes and cats! ! !<br/>welcome to my website! ! Have fun looking around!<br/>Feel free to sign the guest book or introduce yourself! For any inquiries go to the links section at the top.<br/>Feel free to check out my webcomics and my shop if you'd like to support the work I do! Enjoy your stay!";
    intro.innerHTML = englishText;
    hi.innerText = "Hi there!!!!!";
    book.innerText = "Guestbook";
}

function langFr() {
    var intro = document.getElementById("intro");
    var hi = document.getElementById("hithere");
    var book = document.getElementById("bookTitle");
    var frenchText = "Je suis puppet/puppetizer/pupp3t1z3r, un artiste qui aime les mèmes dépassés et les chats! ! !<br/>bienvenue sur mon site! ! Amusez-vous à regarder autour de vous!<br/>N’hésitez pas à signer le livre d’or ou à vous présenter! Pour toute demande de renseignements,<br/>rendez-vous dans la section liens en haut.<br/>N'hésitez pas à consulter mes webcomics et ma boutique si vous souhaitez soutenir le travail que je fais! Profitez de votre séjour!";
    intro.innerHTML = frenchText;
    hi.innerText = "Salut!!!!!";
    book.innerText = "Livre d'or";
}

function langEsp() {
    var intro = document.getElementById("intro");
    var hi = document.getElementById("hithere");
    var book = document.getElementById("bookTitle");
    var SpanishText = "Soy puppet/puppetizer/pupp3t1z3r, ¡Un artista al que le encantan los memes anticuados y los gatos! ! !<br/>bienvenido a mi sitio web! ! ¡Diviértete mirando a tu alrededor!<br/>¡No dudes en firmar el libro de visitas o presentarte! Para cualquier consulta dirígete a la sección de enlaces en la parte superior.<br/>¡No dudes en visitar mis webcomics y mi tienda si quieres apoyar el trabajo que hago!<br/>¡Disfruta de tu estancia!";
    intro.innerHTML = SpanishText;
    hi.innerText = "¡¡¡¡¡Hola!!!!!";
    book.innerText = "Libro de visitas";
}

function meowClick() {
    var meow = document.getElementById("meow");
    meow.play();
    setTimeout(function() {
    window.open("catPage.html", "_self");
    }, 1000);
}

function logoClick() {
    window.open("index.html", "_self");
}