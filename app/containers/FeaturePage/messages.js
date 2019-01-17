/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Features of NXD2',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Simple User Interface:',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Users can use the responsive UI to deliver their content anywhere through cloud!`,
  },
  feedbackHeader: {
    id: `${scope}.feedback.header`,
    defaultMessage: 'Pre-Scheduling Advertisments:',
  },
  feedbackMessage: {
    id: `${scope}.feedback.message`,
    defaultMessage: `Users can schedule their advertisements well before by using the buffer space provided!
    `,
  },
  stateManagementHeader: {
    id: `${scope}.state_management.header`,
    defaultMessage: 'Change your content:',
  },
  stateManagementMessages: {
    id: `${scope}.state_management.message`,
    defaultMessage: `Content can be modified and updated with one's own convience
    `,
  },
  javascriptHeader: {
    id: `${scope}.javascript.header`,
    defaultMessage: 'Create your own Advertisements:',
  },
  javascriptMessage: {
    id: `${scope}.javascript.message`,
    defaultMessage: `Users can make their own advertisements and customise it by using our creative templates`,
  },
  cssHeader: {
    id: `${scope}.css.header`,
    defaultMessage: 'Features',
  },
  cssMessage: {
    id: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    id: `${scope}.routing.header`,
    defaultMessage: 'Industry-standard routing',
  },
  routingMessage: {
    id: `${scope}.routing.message`,
    defaultMessage: `
      Write composable CSS that's co-located with your components for
    complete modularity. Unique generated class names keep the
    specificity low while eliminating style clashes. Ship only the
    styles that are on the page for the best performance.
    `,
  },
  networkHeader: {
    id: `${scope}.network.header`,
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: `${scope}.network.message`,
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    id: `${scope}.internationalization.header`,
    defaultMessage:
      'Complete i18n Standard Internationalization & Pluralization',
  },
  intlMessage: {
    id: `${scope}.internationalization.message`,
    defaultMessage:
      'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.',
  },
});
