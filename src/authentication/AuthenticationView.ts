


import { AuthenticationForgotPassword } from "./AuthenticationForgotPassword";
import { AuthenticationBanner } from "./AuthenticationBanner";
import { AuthenticationSignIn } from "./AuthenticationSignIn";
import { AuthenticationSignUp } from "./AuthenticationSignUp";
import { SystemConstants } from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { ViewComponent } from "../core/ViewComponent";
import { ISignal } from "../core/ISignal";
import { View } from "../core/View";


// HTML
const authenticationViewTemplate = require( "../_view-templates/authentication-view.html" );






export class AuthenticationView extends View {

    private authenticationBanner: ViewComponent;
    private authenticationSignIn: ViewComponent;
    private authenticationSignUp: ViewComponent;
    private authenticationForgotPassword: ViewComponent;

    private authenticationBannerContainer: HTMLElement;
    private authenticationSignInContainer: HTMLElement;
    private authenticationSignUpContainer: HTMLElement;
    private authenticationForgotPasswordContainer: HTMLElement;



    constructor() {
        super( "AuthenticationView" );


        this.container = document.createElement( "div" );
        this.container.id = "authentication-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = authenticationViewTemplate;

        this.authenticationBannerContainer              = document.getElementById( "authentication-banner-container" );
        this.authenticationSignInContainer              = document.getElementById( "authentication-sign-in-container" );
        this.authenticationSignUpContainer              = document.getElementById( "authentication-sign-up-container" );
        this.authenticationForgotPasswordContainer      = document.getElementById( "authentication-forgot-password-container" );


        this.authenticationBanner           = new AuthenticationBanner( this, this.authenticationBannerContainer );
        this.authenticationSignIn           = new AuthenticationSignIn( this, this.authenticationSignInContainer );
        this.authenticationSignUp           = new AuthenticationSignUp( this, this.authenticationSignUpContainer );
        this.authenticationForgotPassword   = new AuthenticationForgotPassword( this, this.authenticationForgotPasswordContainer);



        this.enterScene();


    }



    public enterScene(): void {

    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.authenticationBanner.exitScene( exitType );
        this.authenticationSignIn.exitScene( exitType );
        this.authenticationSignUp.exitScene( exitType );
        this.authenticationForgotPassword.exitScene( exitType );

    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {



            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "Signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {


            default:
                break;
        }

    }

}