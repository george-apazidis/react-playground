import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs';

describe(`Tabs Component`, () => {
  // array of objects each with a name and content
  const tabsProp = [
    {
      name: "First tab",
      content:
        "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
    },
    {
      name: "Second tab",
      content:
        "2. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Third tab",
      content:
        "3. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
    }
  ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
})