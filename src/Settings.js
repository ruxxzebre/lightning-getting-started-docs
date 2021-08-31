import { Lightning } from '@lightningjs/sdk';
import Menu from './menu/Menu.js';

export default class Settings extends Lightning.Component {
  static _template() {
    return {
      Text: {
        x: 600,
        y: 300,
        text: {
          fontSize: 32,
          textAlign: 'center',
          text: 'Game mode',
        },
      },
      Menu: {
        x: 600,
        y: 400,
        type: Menu,
        items: [
          { label: 'PVE (versus AI)', action: 'gamemode_pve' },
          { label: 'PVP', action: 'gamemode_pvp' },
        ],
      },
    };
  }

  _getFocused() {
    return this.tag('Menu');
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Menu').activeItem });
  }
}
