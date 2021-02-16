import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import VideoList from '../components/VideosList';

configure({adapter: new Adapter()});

describe(VideoList, () => {
    const component = shallow(<VideoList data={[]}/>);
    it('should exist', () => {
        const component = renderer.create(<VideoList data={[]}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    }) 
});