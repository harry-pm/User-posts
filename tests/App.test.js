import React from 'react';
import App from '../src/containers/App';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import {expect as exp} from 'chai';
import Post from '../src/containers/Post';

describe('App', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(<App />).toJSON()
        expect(tree).toMatchSnapshot();
    })

    it('renders Posts', () => {
        const posts = [{id: '2', title: 'hi', body: 'hello'}]
        const postComponent = shallow(<App post={post}/>)
        expect(postComponent).toMatchSnapshot();
    })
})

//shallow does a fake browser to compare with
//mount - where shallow only goes one level deep, mount will go recursivley and render all the children

