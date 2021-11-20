import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h4>Are you sure you want to submit this information?</h4>
      {reviewFields}
      <div style={{paddingTop: '10px'}}>
        <button
          className='yellow darken-3 btn-flat white-text'
          onClick={onCancel}
        >
          Take me back
          <i className='material-icons left'>chevron_left</i>
        </button>
        <button 
          onClick={() => submitSurvey(formValues, history)}
          className='green btn-flat right white-text'
        >
          Yes, I'm sure
          <i className='material-icons right'>email</i>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));