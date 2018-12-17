import React, { Component, Fragment } from 'react';

import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import RadioToggle from '../Components/RadioToggle';
import Input from '../Components/Input';

import { getEventMeta } from '../utils/globals';

class ConfigureForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      eventContact: getEventMeta.contact,
      eventContactMethod: getEventMeta.contactMethod,
      eventDesc: getEventMeta.description,
      eventOrg: getEventMeta.organizer,
      eventLang: getEventMeta.language,
      eventLink: getEventMeta.link,
      eventMaterialsLink: getEventMeta.materialsLink,
      eventTimezone: getEventMeta.timezone,
      eventTitle: getEventMeta.title,
      hasTime: getEventMeta.hasTime,
      multiDay: getEventMeta.multiDay,
      speakerNum: 0
    };

    this.handleInputChange = this.handleInputChange.bind( this );
    this.handleRadioChange = this.handleRadioChange.bind( this );
    this.handleAddSpeaker = this.handleAddSpeaker.bind( this );
  }

  handleInputChange( e ) {
    this.setState( {
      [e.target.name]: e.target.value
    } );
  }

  handleRadioChange( e ) {
    const selected = e.target.value;
    const isSelectedTrue = ( selected === 'true' );

    this.setState( {
      [e.target.dataset.alias]: isSelectedTrue
    } );
  }

  handleAddSpeaker() {
    const { speakerNum } = this.state;
    const newNum = speakerNum + 1;

    this.setState( {
      speakerNum: newNum
    } );
  }

  render() {
    const {
      eventContact, eventContactMethod, eventDesc, eventLang, eventLink,
      eventMaterialsLink, eventOrg, eventTitle, eventTimezone, hasTime, multiDay
    } = this.state;

    return (
      <Fragment>
        <Input
          callback={ this.handleInputChange }
          classes="wide-input stacked"
          id="iip_event_title"
          label="Title:"
          name="eventTitle"
          value={ eventTitle }
        />
        <label htmlFor="iip-event-desc">
          Enter a Description for your event:
          <textarea
            className="large-textarea stacked"
            id="iip_event_desc"
            name="eventDesc"
            onChange={ this.handleInputChange }
            value={ eventDesc }
          />
        </label>
        <div className="iip-event-lower-admin-container">
          <strong className="iip-event-subsection-heading">Set the Date and Time:</strong>
          <div className="iip-event-datetime">
            <div className="iip-event-start-date">
              <p className="iip-events-faux-label">Select the date of your event:</p>
              <DateSelector date={ getEventMeta.date } metavalue="date" />
            </div>
            <div className="iip-event-end-date">
              <p className="iip-events-faux-label">Multi-day event?</p>
              <RadioToggle callback={ this.handleRadioChange } metavalue="multiDay" option={ multiDay } />
              { multiDay && (
                <Fragment>
                  <br />
                  <p className="iip-events-faux-label">Set the end date:</p>
                  <DateSelector date={ getEventMeta.endDate } metavalue="endDate" />
                </Fragment>
              ) }
            </div>
            <div className="iip-event-time">
              <p className="iip-events-faux-label">Include a time for your event?:</p>
              <RadioToggle callback={ this.handleRadioChange } metavalue="hasTime" option={ hasTime } />
              { hasTime && (
                <Fragment>
                  { /* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */ }
                  <label htmlFor="iip_event_time">
                    Start Time:
                    { '  ' }
                    <TimeSelector metavalue="time" time={ getEventMeta.time } />
                  </label>
                  <br />
                  { /* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */ }
                  <label htmlFor="iip_event_endTime">
                    End Time:
                    { '  ' }
                    <TimeSelector metavalue="endTime" time={ getEventMeta.endTime } />
                  </label>
                  <br />
                  <Input
                    callback={ this.handleInputChange }
                    id="iip_event_timezone"
                    label="Timezone:"
                    name="eventTimezone"
                    value={ eventTimezone }
                  />
                </Fragment>
              ) }
            </div>
          </div>
          <strong className="iip-event-subsection-heading">Add Event Details:</strong>
          <div className="iip-event-additional-info">
            <Input
              callback={ this.handleInputChange }
              classes="stacked"
              id="iip_event_organizer"
              label="Add an organizer:"
              name="eventOrg"
              value={ eventOrg }
            />
            <Input
              callback={ this.handleInputChange }
              classes="stacked"
              id="iip_event_language"
              label="Program language:"
              name="eventLang"
              value={ eventLang }
            />
            <Input
              callback={ this.handleInputChange }
              classes="stacked"
              id="iip_event_link"
              label="Add an link:"
              name="eventLink"
              value={ eventLink }
            />
          </div>
          <strong className="iip-event-subsection-heading">Add Speakers:</strong>
          <div className="iip-event-add-speakers">
            <button onClick={ this.handleAddSpeaker } type="button">+</button>
          </div>
          <strong className="iip-event-subsection-heading">Add Promotional Materials:</strong>
          <div className="iip-event-add-materials">
            <Input
              callback={ this.handleInputChange }
              id="iip_event_materials_link"
              label="Add link to materials:"
              name="eventMaterialsLink"
              value={ eventMaterialsLink }
            />
          </div>
          <strong className="iip-event-subsection-heading">Add Contact Info:</strong>
          <div className="iip-event-add-contact">
            <Input
              callback={ this.handleInputChange }
              classes="stacked"
              id="iip_event_contact_name"
              label="Add contact name:"
              name="eventContact"
              value={ eventContact }
            />
            <Input
              callback={ this.handleInputChange }
              classes="stacked"
              id="iip_event_contact_method"
              label="Add contact method (Ex. email, phone number):"
              name="eventContactMethod"
              value={ eventContactMethod }
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ConfigureForm;
