import { NgModule, Component } from "@angular/core";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { Router, RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule, 
        RouterModule.forChild([{path: '', component: AuthComponent}])
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule {}