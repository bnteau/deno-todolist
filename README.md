# Premier projet avec Deno

Créer un nouveau projet avec Deno :
[Lien vers la doc de Deno](https://deno.land/#installation)

Utiliser Drash :
[Lien vers la doc de Drash](https://drash.land/drash/v1.x/#/)

Drash permet de créer des API REST avec Deno, grâce à des Resources. Le framework permet de manipuler différents types de fichiers différents, de parser les requêtes,
de gérer les paramètres des paths créés et d'autres choses encore.

## Dans VS Code
Si on utilise VS Code, il faudra installer l'extension Deno créée pour l'éditeur [ici](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno).

Un fichier de configuration sera donc créé avec des informations telles que :
```JSON
{
    "deno.enable": true,
    "deno.lint": true,
    "deno.unstable": true,
    "deno.suggest.imports.hosts": {
        "https://deno.land": true
    }
}
```
On peut en parallèle utiliser une extension comme [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) pour tester nos requêtes, tout comme on peut utiliser [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

## L'application est prête !
Une fois notre serveur prêt, on peut lancer notre application avec la commande suivante :
```
deno run --allow-net app.ts
```
Le flag --allow-net nous permet d'accéder à l'ensemble du web. On aurait pu préciser une adresse en paramètre au besoin. Si ce flag n'est pas précisé, 
alors l'accès sera bloqué.

Vous n'avez plus qu'à vous amuser avec Deno et Drash !
