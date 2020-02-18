import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public image: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, img: string, ingrs: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.image = img;
        this.ingredients = ingrs;
    }
}