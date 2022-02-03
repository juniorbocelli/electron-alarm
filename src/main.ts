import { app } from 'electron';

import { TrayMenu } from '@/electron/TrayMenu';
import appManager from '@/electron/AppManager';
import AlarmWindow from '@/electron/AlarmWindow';

app.disableHardwareAcceleration();

app.on('ready', () => {
  appManager.setTrayMenu(new TrayMenu());
  appManager.addWindow('AlarmWindow', new AlarmWindow);
});