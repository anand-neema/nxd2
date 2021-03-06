/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'features',
  },
    contactus: {
    id: `${scope}.contactus`,
    defaultMessage: 'contactus',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Sign up',
  },
   login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
