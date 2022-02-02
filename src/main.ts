import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

import { TrayMenu } from '@/electron/TrayMenu';

const appElements: any = {
  tray: null,
  windows: [],
};

app.on('ready', () => {
  appElements.tray = new TrayMenu();
});