import { create } from '@storybook/theming/create';
import { version } from '../src/utils/version';

export default create({
  brandTitle: `@design-system-senai-react - ${version || '0.0.0'}v`,

  brandTarget: '_self',
});
