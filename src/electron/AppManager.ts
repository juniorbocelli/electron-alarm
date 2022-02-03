import AlarmWindow from './AlarmWindow';
import { TrayMenu } from './TrayMenu';

export type ManagerType = AlarmWindow;

class AppManager {
  private trayMenu!: TrayMenu;
  private windows: Map<string, ManagerType> = new Map();

  setTrayMenu(trayMenu: TrayMenu) {
    this.trayMenu = trayMenu;
  };

  getTrayMenu(): TrayMenu {
    return this.trayMenu;
  };

  setWindows(windows: Map<string, ManagerType>) {
    this.windows = windows;
  };

  getWindows(): Map<string, ManagerType> {
    return this.windows;
  };

  addWindow(name: string, window: ManagerType) {
    this.windows.set(name, window);
  };

  getWindow(name: string): ManagerType {
    const window = this.windows.get(name);

    if (window) {
      return window;
    } 
    throw new Error(`[AppManager] - Element with name ${name} doesn't exist!`)
  };

  deleteWindow(name: string) {
    this.windows.delete(name);
  };
};

// TODO: transform in singleton
export default new AppManager();