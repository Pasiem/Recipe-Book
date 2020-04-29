import { NgModule } from "@angular/core";
import { SearchFilter } from "./filterlist.pipe";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { DropdownDirective } from "./dropdown.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SearchFilter,
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SearchFilter,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {}