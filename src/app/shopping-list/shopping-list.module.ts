import { NgModule } from "@angular/core";
import { ShoppinglistComponent } from "./shopping-list.component";
import { ShoppinglisteditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppinglisteditComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: ShoppinglistComponent }])
    ],
    exports: [
        ShoppinglistComponent,
        ShoppinglisteditComponent
    ],
    providers: []
})

export class ShoppingListModule {}