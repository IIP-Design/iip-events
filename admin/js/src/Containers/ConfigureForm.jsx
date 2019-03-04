import React, { Component, Fragment } from 'react';

import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import FileUploader from '../Components/FileUploader';
import Input from '../Components/Input';
import RadioToggle from '../Components/RadioToggle';
import TimezoneDropdown from '../Components/TimezoneDropdown';

import { getEventMeta } from '../utils/globals';
import { TIMEZONES } from '../utils/timezones';

// eslint-disable-next-line no-undef
const eventAjax = iipEventParams.eventAjax || {};
const { ajaxUrl, eventId, iipEventNonce } = eventAjax;

class ConfigureForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      eventContact: getEventMeta.contact,
      eventContactMethod: getEventMeta.contactMethod,
      eventDesc: getEventMeta.description,
      eventMaterialsLink: getEventMeta.materialsLink,
      eventTimezone: getEventMeta.timezone,
      eventTitle: getEventMeta.title,
      hasTime: getEventMeta.hasTime,
      multiDay: getEventMeta.multiDay,
      eventDetails: getEventMeta.details,
      eventFiles: getEventMeta.files,
      speakers: getEventMeta.speakers
    };
  }

  handleInputChange = ( e ) => {
    this.setState( {
      [e.target.name]: e.target.value
    } );
  }

  handleRadioChange = ( e ) => {
    const selected = e.target.value;
    const isSelectedTrue = ( selected === 'true' );

    this.setState( {
      [e.target.dataset.alias]: isSelectedTrue
    } );
  }

  handleAddArrayInput = ( group, ...args ) => {
    const obj = {};
    args.forEach( ( arg ) => {
      obj[arg] = '';
      return obj;
    } );

    this.setState( prevState => ( {
      [group]: [...prevState[group], obj]
    } ) );
  }

  handleArrayInput = ( e ) => {
    const { group, index } = e.target.dataset;
    const stateGroup = this.state[group]; // eslint-disable-line react/destructuring-assignment
    const obj = Object.assign( [], stateGroup );
    const property = e.target.name;

    obj[index][property] = e.target.value;

    this.setState( { [group]: obj } );
  }

  handleTimezoneChange = ( e ) => {
    const zoneValues = JSON.parse( e.target.value );

    this.setState( {
      eventTimezone: zoneValues
    } );
  }

  handleDeleteRow = ( e ) => {
    const { group, index } = e.target.dataset;
    const stateGroup = this.state[group]; // eslint-disable-line react/destructuring-assignment
    const obj = Object.assign( [], stateGroup );
    obj.splice( index, 1 );

    this.setState( {
      [group]: obj
    } );
  }

  handleNewFile = ( obj ) => {
    const { eventFiles } = this.state;
    const newFiles = Object.assign( [], eventFiles );
    newFiles.push( obj );

    this.setState( {
      eventFiles: newFiles
    } );
  }

  handleRemoveFile = ( toRemove ) => {
    const { eventFiles } = this.state;
    const newFiles = Object.assign( [], eventFiles );

    newFiles.forEach( ( file, index ) => {
      if ( file.url === toRemove ) {
        newFiles.splice( index, 1 );
      }
    } );

    this.setState( {
      eventFiles: newFiles
    } );
  }

  handleNewSpeakerImage = ( obj, index ) => {
    const { speakers } = this.state;
    const newSpeakers = Object.assign( [], speakers );
    const imgArr = [];
    imgArr.push( obj );
    newSpeakers[index].image = imgArr;

    this.setState( {
      speakers: newSpeakers
    } );
  }

  handleRemoveSpeakerFile = ( toRemove, index ) => {
    const { speakers } = this.state;
    const newSpeakers = Object.assign( [], speakers );

    newSpeakers[index].image = [];

    this.setState( {
      speakers: newSpeakers
    } );
  }

  render() {
    const {
      eventContact, eventContactMethod, eventDesc, eventMaterialsLink, eventTitle,
      eventTimezone, eventFiles, hasTime, multiDay, eventDetails, speakers
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
                  <label htmlFor="iip_event_time">
                    Start Time:
                    { '  ' }
                    <TimeSelector metavalue="time" time={ getEventMeta.time } />
                  </label>
                  <br />
                  <label htmlFor="iip_event_endTime">
                    End Time:
                    { '  ' }
                    <TimeSelector metavalue="endTime" time={ getEventMeta.endTime } />
                  </label>
                  <br />
                  <TimezoneDropdown
                    callback={ this.handleTimezoneChange }
                    timezones={ TIMEZONES }
                    value={ eventTimezone }
                  />
                </Fragment>
              ) }
            </div>
          </div>
          <strong className="iip-event-subsection-heading">Add Event Details:</strong>
          <div className="iip-event-additional-info">
            <div className="iip-event-details-grid">
              <div className="iip-event-details-item"><p>Event Detail Title:</p></div>
              <div className="iip-event-details-item"><p>Event Detail Value:</p></div>
              <div className="iip-event-details-item"><p>Link:</p></div>
              <div className="iip-event-details-item"><p /></div>
              {
                eventDetails.map( ( value, index ) => {
                  const position = index + 1;

                  return (
                    <Fragment>
                      <Input
                        callback={ this.handleArrayInput }
                        classes="iip-event-details-item"
                        group="eventDetails"
                        index={ index }
                        id={ `iip_event_info_${position}_title` }
                        name="title"
                        placeholder="Language"
                        value={ eventDetails[index].title }
                      />
                      <Input
                        callback={ this.handleArrayInput }
                        classes="iip-event-details-item"
                        group="eventDetails"
                        index={ index }
                        id={ `iip_event_info_${position}_name` }
                        name="name"
                        placeholder="Spanish"
                        value={ eventDetails[index].name }
                      />
                      <Input
                        callback={ this.handleArrayInput }
                        classes="iip-event-details-item"
                        group="eventDetails"
                        index={ index }
                        id={ `iip_event_info_${position}_link` }
                        name="link"
                        placeholder="https://spanish.com"
                        value={ eventDetails[index].link }
                      />
                      <button
                        className="iip-events-close-btn"
                        data-group="eventDetails"
                        data-index={ index }
                        onClick={ this.handleDeleteRow }
                        type="button"
                      >
                        X
                      </button>
                    </Fragment>
                  );
                } )
              }
            </div>
            <button
              onClick={ () => { this.handleAddArrayInput( 'eventDetails', 'title', 'name', 'link' ); } }
              type="button"
            >
              +
            </button>
            <input hidden name="detailsArr" value={ JSON.stringify( eventDetails ) } />
          </div>
          <strong className="iip-event-subsection-heading">Add Speakers:</strong>
          <div className="iip-event-add-speakers">
            {
              speakers.map( ( value, index ) => {
                const position = index + 1;

                return (
                  <div className="iip-event-speaker-grid">
                    <strong className="iip-event-speaker-header">{ `Speaker # ${position}` }</strong>
                    <button
                      className="iip-events-close-btn"
                      data-group="speakers"
                      data-index={ index }
                      onClick={ this.handleDeleteRow }
                      style={ { textAlign: 'right', gridArea: 'remove' } }
                      type="button"
                    >
                      X
                    </button>
                    <div className="iip-event-speaker-input1">
                      <Input
                        callback={ this.handleArrayInput }
                        classes="stacked wide-input"
                        group="speakers"
                        index={ index }
                        id={ `iip_event_speaker_${position}` }
                        label="Speaker Name:"
                        name="name"
                        value={ speakers[index].name }
                      />
                    </div>
                    <div className="iip-event-speaker-input2">
                      <Input
                        callback={ this.handleArrayInput }
                        classes="stacked wide-input"
                        group="speakers"
                        index={ index }
                        id={ `iip_event_speaker_${position}_title` }
                        label="Speaker title:"
                        name="title"
                        value={ speakers[index].title }
                      />
                    </div>
                    <div className="iip-event-add-files iip-event-speaker-image">
                      <p>Speaker Image:</p>
                      <FileUploader
                        ajaxUrl={ ajaxUrl }
                        allowMultiple={ false }
                        callbackAdd={ this.handleNewSpeakerImage }
                        callbackRemove={ this.handleRemoveSpeakerFile }
                        index={ index }
                        eventId={ eventId }
                        files={ speakers[index].image }
                        iipEventNonce={ iipEventNonce }
                      />
                    </div>
                    <label className="iip-event-speaker-bio" htmlFor={ `iip_event_speaker_${position}_bio` }>
                      Speaker bio:
                      <textarea
                        className="medium-textarea stacked"
                        data-group="speakers"
                        data-index={ index }
                        id={ `iip_event_speaker_${position}_bio` }
                        name="bio"
                        onChange={ this.handleArrayInput }
                        value={ speakers[index].bio }
                      />
                    </label>
                    <hr />
                  </div>
                );
              } )
            }
            <button
              onClick={ () => { this.handleAddArrayInput( 'speakers', 'name', 'title', 'bio', 'image' ); } }
              type="button"
            >
              +
            </button>
            <input hidden name="speakersArr" value={ JSON.stringify( speakers ) } />
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
            <div className="iip-event-add-files">
              <p>Add files:</p>
              <FileUploader
                ajaxUrl={ ajaxUrl }
                allowMultiple
                callbackAdd={ this.handleNewFile }
                callbackRemove={ this.handleRemoveFile }
                eventId={ eventId }
                files={ eventFiles }
                iipEventNonce={ iipEventNonce }
              />
            </div>
            <input hidden name="filesArr" value={ JSON.stringify( eventFiles ) } />
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
