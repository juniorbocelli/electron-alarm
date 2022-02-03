import { app, Tray, Menu, nativeImage, NativeImage } from 'electron';

import appManager from './AppManager';

export class TrayMenu {
  public readonly tray: Tray;

  private iconPath: string = '/assets/clock-icon.png';

  constructor() {
    this.tray = new Tray(this.createNativeImage());
    this.tray.setContextMenu(this.createMenu());
  };

  private createNativeImage(): NativeImage {
    const path = `${app.getAppPath()}${this.iconPath}`;
    const image = nativeImage.createFromPath(path);

    image.setTemplateImage(true);

    return image;
  };

  private createMenu(): Menu {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Alarm',
        type: 'normal',
        click: () => appManager.getWindow('AlarmWindow').window.show(),
      },
      {
        label: 'Quit',
        type: 'normal',
        click: () => app.exit(),
      }
    ]);

    return contextMenu;
  };
};