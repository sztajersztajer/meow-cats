import React from 'react';
import Cat from './Cat';
import {shallow} from 'enzyme';

const defaultProps = {
    cat: {catId: 0}
}

it('renders the image tag', () => {
    const component = shallow(
        <Cat {...defaultProps}/>
    );

    expect(component.find('img').length).toBe(1)
});

it('renders correct image', () =>{
    const component = shallow(
        <Cat {...defaultProps}/>
    );

    expect(component.find('img').prop('src')).toBe("https://cataas.com/cat//says/%20?s=50&c=white&filter=&width=400&height=&uniqueNum=0")
});
