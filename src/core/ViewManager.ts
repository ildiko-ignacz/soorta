

import { INotification } from "./INotification";
import { ViewExitTypes } from "./ViewExitTypes";
import { CoreEntity } from "./CoreEntity";
import { View } from "./View";
import {AuthenticationView} from "../authentication/AuthenticationView";





export class ViewManager extends CoreEntity {
    public NAME: string;
    private mainMenuView: View;
    private currentView: View;


    constructor() {
        super( "ViewManager" );
        this.initView();
    }


    private initView(): void {
        // this.mainMenuView = new MainMenuView();
        this.currentView = new AuthenticationView();
    }


    private switchView(view: any, exitType?: string, callback?: Function): void {

        if ( ! exitType ) exitType = ViewExitTypes.DEFAULT;

        this.currentView.exitScene( exitType, () => {

            this.currentView = new view();

            if ( callback ) callback();

        });
    }



    public listNotificationInterests(): any[] {

        let notifications = [];



        return notifications;
    }



    public handleNotification(notification: INotification) {

        console.info( "View manager notification arrived: " + notification.name );

        switch ( notification.name ) {


            default :
                break;
        }

    }

}