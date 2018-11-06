import { app, BrowserWindow, Tray, Menu } from "electron";

let mainWindow: BrowserWindow;
let tray: Tray;

app.on( "ready", () => {

    console.info( "Electron initialized" );

    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1200,
        icon: `${__dirname}/windows-icon-64.png`
    });

    mainWindow.loadURL( `file://${__dirname}/../index.html` );

    tray = new Tray( `${__dirname}/windows-icon.png` );

    tray.setToolTip( "Soorta" );


    tray.on( "click", () => {

        if ( mainWindow.isVisible() ) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }

    });

    tray.on( "right-click", () => {

        const menuConfig = Menu.buildFromTemplate([
            {
                label: "Quit",
                click: () => app.quit()
            }
        ]);

        tray.popUpContextMenu( menuConfig );

    });


    mainWindow.webContents.openDevTools();
});


app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
});