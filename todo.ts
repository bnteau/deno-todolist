import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

// Juste des fausses données
let todos:Todo[] = [
    {
        id: 1,
        title: "Passer à Typescript",
        completed: false,
    },
    {
        id: 2,
        title: "Créer une API REST",
        completed: false,
    },
    {
        id: 3,
        title: "Faire un beau design",
        completed: false,
    },
]


export class TodoList extends Drash.Http.Resource {
    
    // On indique ici le chemin sur lequel la requête peut être faite
    static paths = ["/todos"];

    // La fonction indique le verbe HTTP à utiliser pour la requête
    public GET() {
        this.response.body = JSON.stringify(todos);
        return this.response;
    }

    // Fonction très simple pour créer une nouvelle tâche
    public POST() {

        // this.request.getBodyParam() nous permet de récupérer les données entrées lors de la requête
        // il nous suffit simplement d'indiquer la propriété voulue (title, completed)
        const newTodo:Todo = {
            id: Math.floor(Math.random() * Math.floor(100000)),
            title: this.request.getBodyParam("title") as string,
            completed: this.request.getBodyParam("completed") as boolean,
        }
        todos.push(newTodo);

        this.response.body = JSON.stringify(newTodo);
        return this.response;
    }
}

// Cette classe va nous permettre de manipuler les tâches une par une
export class TodoElement extends Drash.Http.Resource {

    // Ici, l'id sera donc une variable...
    static paths = ["/todos/:id"];

    // ...que l'on peut récupérer avec la fonction getPathParam()
    public GET() {
        const URLParam = this.request.getPathParam("id");
        // On peut alors simplement récupérer la tâche ciblée
        const todoToGet = todos.find((t) => t.id.toString() == URLParam);

        // Rapide gestion d'erreur pour le principe
        if (!todoToGet) {
            throw new Drash.Exceptions.HttpException(
                404,
                `Tod with id ${URLParam} not found`,
            );
        }

        this.response.body = JSON.stringify(todoToGet);
        return this.response;
    }
    
    public PUT() {
        const URLParam = this.request.getPathParam("id");
        const todoToModify = todos.find((t) => t.id.toString() == URLParam);
        
        if (!todoToModify) {
            throw new Drash.Exceptions.HttpException(
                404,
                `Todo with id ${URLParam} not found`,
            );
        }
            
        todoToModify.completed = 
        this.request.getBodyParam("completed") === true ? true : false;
        
        this.response.body = JSON.stringify(todoToModify);
        return this.response;
    }

    public DELETE() {
        const URLParam = this.request.getPathParam("id");
        const todoToDelete = todos.find((t) => t.id.toString() == URLParam);

        if (!todoToDelete) {
            throw new Drash.Exceptions.HttpException(
                404,
                `Todo with id ${URLParam} not found`,
            );
        }

        todos = todos.filter((t) => t.id.toString() != URLParam);
        this.response.body = JSON.stringify(todos);
        return this.response;
    }
}