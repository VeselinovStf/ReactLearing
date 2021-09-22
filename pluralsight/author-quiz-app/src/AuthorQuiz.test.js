import React from 'react';
import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';
import ReactDOM from 'react-dom';
import { iteratee, wrap } from 'underscore';
import { mount } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const state = { 
  turnData: {
    books: [
      'The Adventures of Huckleberry Finn', 'Under the Yoke', 'Epic of the Forgotten','Немили-недраги'
    ],
    author: {
      name: 'Mark Twain',
      imageUrl: './images/authors/marktwain.jpg',
      imageSource: 'Wikipedia',
      books: ['The Adventures of Huckleberry Finn', ' The Adventures of Tom Sawyer',' The Mysterious Stranger']
    }
  },
  highlight: 'none'
};

describe("Author Quiz", () => {

  it("Renderering", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <AuthorQuiz {...state}
        onAnswerSelected={()=> {}}
      />,
      div
    );
  });

  describe("When no answer has beem selected", ()=>{

    let wrapper;
    beforeAll(() =>{
      wrapper = mount(<AuthorQuiz {...state}
        onAnswerSelected={()=> {}}
      />)
    });

    it("should have no background collor", () => {
      expect(wrapper.find("div.row.turn")
        .props()
        .style
        .backgroundColor)
        .toBe('')
    })

  });

  describe("When loss answer has beem selected", ()=>{
    let wrapper;
    beforeAll(() =>{
      wrapper = mount(<AuthorQuiz 
        {...(Object.assign(
          {}, state, {highlight: 'lost'}
          ))}
        onAnswerSelected={()=> {}}
      />)
    });

    it("should have red background collor", () => {
      expect(wrapper.find("div.row.turn")
        .props()
        .style
        .backgroundColor)
        .toBe('red')
    })
  });

  describe("When win answer has beem selected", ()=>{
    let wrapper;
    beforeAll(() =>{
      wrapper = mount(<AuthorQuiz 
        {...(Object.assign(
          {}, state, {highlight: 'win'}
          ))}
        onAnswerSelected={()=> {}}
      />)
    });

    it("should have green background collor", () => {
      expect(wrapper.find("div.row.turn")
        .props()
        .style
        .backgroundColor)
        .toBe('green')
    })
  });

  describe("When user selects for first time",() => {
    let wrapper;
    const handleAnswerSelected = jest.fn();

    beforeAll(() =>{
      wrapper = mount(<AuthorQuiz {...state}
        onAnswerSelected={handleAnswerSelected}
      />);
      wrapper.find('.answer').first().simulate('click');
    });

    it("on answer is triggered", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should recieve first", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Adventures of Huckleberry Finn");
    });
  });

});