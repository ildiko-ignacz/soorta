

import { CoreEntity } from "../core/CoreEntity";



export class ConnectionProxy extends CoreEntity {
    private address: string;



    constructor(proxyName: string) {
        super( proxyName );

        this.address = "http://localhost:4200";
    }





    private httpRequest(method: string, endpoint: string, data: any, success: Function, failure: Function): XMLHttpRequest {

        let xhr = new XMLHttpRequest();

        xhr.open( method, this.address + endpoint, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );


            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        if ( data ) {
            xhr.send( JSON.stringify( data ) );
        } else {
            xhr.send();
        }

        return xhr;
    }


}