/*
 * Car Messages
 *
 * This contains all the text for the Car component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  price: {
    total: {
      id: 'app.components.Car.price.total',
      defaultMessage: '{price}',
    },
  },
  distance: {
    id: 'app.components.Car.distance',
    defaultMessage: '{distance} miles',
  },
  pickup: {
    id: 'app.components.Car.pickup',
    defaultMessage: 'Pickup',
  },
});
