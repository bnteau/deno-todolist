import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";
import { TodoList, TodoElement } from "./todo.ts";
import { Home } from "./home.ts";

// Instanciation
const server = new Drash.Http.Server({
    response_output: "appplication/json",

    // Les Resources sont les classes que nous créons pour construire notre API
    resources: [Home, TodoList, TodoElement],

    // Le Logger de Drash nous permet d'afficher des messages dans le terminal
    // Il va nous indiquer l'état des requêtes envoyées et le code reçu en réponse
    // On peut personnaliser ce message avec tag_string et tag_string_fns
    logger: new Drash.CoreLoggers.ConsoleLogger({
        enabled: true,
        level: "all" ,
        tag_string: "{datetime} | {level} |",
        tag_string_fns: {
            datetime() {
                return new Date().toISOString().replace("T", " ");
            },
        },
    }),
});

// Adresse de lancement du serveur
server.run({
    hostname: "localhost",
    port: 1337,
});

console.log("Server launched with success !")