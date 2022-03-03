
import { EarthquakeService } from '../src/services/earthquake/EarthquakeService';
import { testData } from '../src/data';
import { render } from '@testing-library/react';
import App from '../src/App';
import Provider from '../src/context/Provider';

let mockedEarthQuakeData;
beforeAll(() => {
    mockedEarthQuakeData = jest.spyOn(EarthquakeService, 'getData').mockImplementation(() => {
        return testData.earthquakesData;
    })
});

describe('App Test', () => {

    //mock EarthquakeService.getDat

    test('Expects App earthquake service data to have been called', () => {
        render(
            <Provider>
                <App />
            </Provider>
        )
        expect(mockedEarthQuakeData).toHaveBeenCalledTimes(1);
    });

    test('expects useSetEarthquakeData to have data', () => {
        render(
            <Provider>
                <App />
            </Provider>
        )
    })

})