/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Content Delivery Application - NXD2',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'SAAS, PAAS and creative team to make our own advertisements, Latest IOT device rendering, and much more',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Click Here! to get started:',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Upload your content',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: 'A Product by: Sandeep Mahajan',
  },
});
