import React from 'react';
import SimpleComponent from '../SimpleComponent';
import renderer from 'react-test-renderer';

describe('<SimpleComponent />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<SimpleComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});