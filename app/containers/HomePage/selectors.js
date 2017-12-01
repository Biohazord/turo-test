import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

/**
 * Other specific selectors
 */

const makeSelectQuery = () => createSelector(
    selectHomePageDomain,
    (homepageState) => homepageState.get('query')
);

const makeSelectPickupDate = () => createSelector(
    selectHomePageDomain,
    (homepageState) => homepageState.get('pickupDate')
);

const makeSelectDropoffDate = () => createSelector(
    selectHomePageDomain,
    (homepageState) => homepageState.get('dropoffDate')
);

const makeSelectIsLoading = () => createSelector(
  selectHomePageDomain,
  (homepageState) => homepageState.get('isLoading')
);

const makeSelectCarTypes = () => createSelector(
    selectHomePageDomain,
    // It's a bad idea to do .toJS() in the selector here. I don't want my containers bound to immutable so its necessary.
    // TODO: Remove immutable JS and possibly reselect. Investigate using redux-immutable-state-invariant and if it works as expected with reselect.
    (homepageState) => homepageState
        .get('carTypes')
        .toJS()
        .map((carType) => (
          {
            ...carType,
            carTypeName: carType.CarTypeName,
            typicalSeating: carType.TypicalSeating,
            possibleModels: carType.PossibleModels,
            possibleFeatures: carType.PossibleFeatures,
            id: carType.CarTypeCode,
          }))
);

const makeSelectAvailableCars = () => createSelector(
    [selectHomePageDomain, makeSelectCarTypes()],
    // See note above about using .toJS()
    (homepageState, carTypes) => homepageState
        .get('availableCars')
        .toJS()
        .map((availableCar) => ({
          currencyCode: availableCar.CurrencyCode,
          deepLink: availableCar.DeepLink,
          subTotal: parseFloat(availableCar.SubTotal, 10),
          taxesAndFees: parseFloat(availableCar.TaxesAndFees, 10),
          totalPrice: parseFloat(availableCar.TotalPrice, 10),
          dailyRate: parseFloat(availableCar.DailyRate, 10),
          mileageDescription: availableCar.MileageDescription,
          rentalDays: parseInt(availableCar.RentalDays, 10),
          id: availableCar.ResultId,
          carType: carTypes.find((carType) => carType.CarTypeCode === availableCar.CarTypeCode),
        }))
);

export {
  selectHomePageDomain,
  makeSelectQuery,
  makeSelectAvailableCars,
  makeSelectCarTypes,
  makeSelectPickupDate,
  makeSelectDropoffDate,
  makeSelectIsLoading,
};
