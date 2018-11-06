

import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";


// CSS
import "../_style/style-sheets/authentication-sign-up.scss";

// HTML
const template = require("../_view-templates/authentication-sign-up.html");



export class AuthenticationSignUp extends ViewComponent {


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.enterScene();
    }



    private registerEventListeners(): void {


    }


    private unregisterEventListeners(): void {



    }



    public enterScene(): void {
        this.registerEventListeners();
    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.view.componentExited( this.name );
    }

}