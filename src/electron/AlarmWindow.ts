import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

class AlarmWindow {
  public readonly window: BrowserWindow;

  constructor() {
    this.window = this.createWindow();
  };

  private createWindow(): BrowserWindow {
    const window = new BrowserWindow({
      width: 300,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    window.loadURL(
      isDev
        ? 'http://localhost:9000'
        : `file://${app.getAppPath()}/index.html`
    );

    window.setMenu(null);

    window.setResizable(false);

    window.on('close', (event) => {
      event.preventDefault();
      window.hide();
    });

    return window;
  };
};

export default AlarmWindow;