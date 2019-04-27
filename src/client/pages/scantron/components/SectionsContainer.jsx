import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { sectionOneKeysSelector, sectionTwoKeysSelector, sectionThreeKeysSelector, sectionFourKeysSelector } from '../selectors';
//import order: library -> components -> props

function SectionsContainer({ currentSection, sectionOne, sectionTwo, sectionThree, sectionFour }) {
  const sectionOneList = sectionOne.map((key) => <AnswerOptions key={`s1-${key[1]}`} sectionNum={key[0]} questionNum={key[1]} />);
  const sectionTwoList = sectionTwo.map((key) => <AnswerOptions key={`s2-${key[1]}`} sectionNum={key[0]} questionNum={key[1]} />);
  const sectionThreeList = sectionThree.map((key) => <AnswerOptions key={`s3-${key[1]}`} sectionNum={key[0]} questionNum={key[1]} />);
  const sectionFourList = sectionFour.map((key) => <AnswerOptions key={`s4-${key[1]}`} sectionNum={key[0]} questionNum={key[1]} />);
  
  //conditional rendering of sections based on currentSecion prop
  const SECTION_LISTS = {
    1: sectionOneList,
    2: sectionTwoList,
    3: sectionThreeList,
    4: sectionFourList
  }

  return (
    <>
      <h1>Scantron Container</h1>
      <p>Current section: {currentSection} </p>
      {SECTION_LISTS[currentSection]}
    </>
  );
}

//memoized selectors using reselect
const mapStateToProps = store => ({
  sectionOne: sectionOneKeysSelector(store),
  sectionTwo: sectionTwoKeysSelector(store),
  sectionThree: sectionThreeKeysSelector(store),
  sectionFour: sectionFourKeysSelector(store),
  currentSection: store.scantron.currentSection,
});

//type checking for props
SectionsContainer.propTypes = {
  sectionOne: PropTypes.array.isRequired,
  sectionTwo: PropTypes.array.isRequired,
  sectionThree: PropTypes.array.isRequired,
  sectionFour: PropTypes.array.isRequired,
  currentSection: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(SectionsContainer);
