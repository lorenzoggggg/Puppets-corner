let isEnglish = true;

function yahooClick() {
    var yahoo = document.getElementById("yahoo");
    yahoo.play();
}

function introLang() {
    var intro = document.getElementById("intro");
    var englishText = "I'm puppet/puppetizer/pupp3t1z3r, an artist that loves outdated memes and cats! ! !<br/>welcome to my website! ! Have fun looking around!<br/>Feel free to sign the guest book or introduce yourself! For any inquiries go to the links section at the top.<br/>Feel free to check out my webcomics and my shop if you'd like to support the work I do! Enjoy your stay!";
    var frenchText = "Je suis puppet/puppetizer/pupp3t1z3r, un artiste qui aime les mèmes dépassés et les chats! ! !<br/>bienvenue sur mon site! ! Amusez-vous à regarder autour de vous!<br/>N’hésitez pas à signer le livre d’or ou à vous présenter! Pour toute demande de renseignements,<br/>rendez-vous dans la section liens en haut.<br/>N'hésitez pas à consulter mes webcomics et ma boutique si vous souhaitez soutenir le travail que je fais! Profitez de votre séjour!";
    
    if (isEnglish) {
        intro.innerHTML = frenchText;
    } else {
        intro.innerHTML = englishText;
    }
    isEnglish = !isEnglish;
}

function meowClick() {
    var meow = document.getElementById("meow");
    var hi = document.getElementById("hithere");
    meow.play();
    
    if (hi.innerText === "Hi there!!!!!") {
        hi.innerText = "Salut!!!!!";
    } else {
        hi.innerText = "Hi there!!!!!";
    }

    introLang();
}