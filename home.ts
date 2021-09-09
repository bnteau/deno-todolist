import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

// Classe très simple pour afficher un message sur le endpoint "/"
export class Home extends Drash.Http.Resource {
    static paths =["/"];

    public GET() {
        this.response.body = JSON.stringify("Hello Deno World !");
        return this.response;
    }
}