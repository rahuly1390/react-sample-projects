import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';
describe('Welcome',()=>{
  test('Welcome renders with props', () => {
    //arrange
    render(<Welcome lang='React'/>);
    //act
    const linkElement = screen.getByText('Welcome React');
    expect(linkElement).toBeInTheDocument();
  });
})

