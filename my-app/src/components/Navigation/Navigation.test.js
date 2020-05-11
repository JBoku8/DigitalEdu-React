import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem/NavigationItem';

configure({
  adapter: new Adapter(),
});

describe('<Navigation/> Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('Should render <NavigationItem/> -s when Unauthorized', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('Should render <NavigationItem/> -s when Authorized', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('Should contain Logout Link when authorized', () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(<NavigationItem href="/Logout" title="Logout" />)
    ).toEqual(true);
  });
});
