// let's user our object on the click of the login button
$("#login").click(function () {
    // gets a new object (the architecture allows us
    // to not have to use the 'new' keyword here)
    // create a new 'Greetr' object
    var loginGrtr = G$("Mauricio", "Mercado");

    // hide the login on the screen
    $("#logindiv").hide();

    // use our chainable methods
    // fire off html greeting, passing the '#greeting' selector
    // and the chosen language, and log the welcome as well
    loginGrtr
        .setLang($("#lang").val())
        .HTMLGreeting("#greeting", true)
        .log();
});
