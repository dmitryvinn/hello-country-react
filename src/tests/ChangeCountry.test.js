import React from 'react';
import renderer from 'react-test-renderer';
import ChangeCountry from "../ChangeCountry";

test('Country Change Button ', () => {
    // Initialize Component
    const component = renderer.create(
        <ChangeCountry/>
    );
    // Format result
    let tree = component.toJSON();
    // Assert
    expect(tree).toMatchSnapshot();
});
