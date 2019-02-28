// Gets the global variable passed over from PHP
export const eventParams = ( function getParams() {
  const params = window.iipEventParams || {};
  const eventMeta = params.eventMeta || {};
  return eventMeta;
}() );

// Creates getters and setters
class EventMeta {
  constructor( meta ) {
    this._meta = meta;
  }

  get meta() {
    if ( this._meta ) {
      return this._meta;
    }
    return {};
  }

  get contact() {
    if ( this._meta.contact ) {
      return this._meta.contact;
    }
    return '';
  }

  get contactMethod() {
    if ( this._meta.contactMethod ) {
      return this._meta.contactMethod;
    }
    return '';
  }

  get date() {
    if ( this._meta.date ) {
      return this._meta.date;
    }
    return new Date();
  }

  get description() {
    if ( this._meta.description ) {
      return this._meta.description;
    }
    return '';
  }

  get details() {
    if ( this._meta.details ) {
      return this._meta.details;
    }
    return [];
  }

  get duration() {
    if ( this._meta.duration ) {
      return this._meta.duration;
    }
    return '';
  }

  get endDate() {
    if ( this._meta.endDate ) {
      return this._meta.endDate;
    }
    return new Date();
  }

  get endTime() {
    if ( this._meta.endTime ) {
      return this._meta.endTime;
    }
    return new Date();
  }

  get hasTime() {
    if ( this._meta.hasTime ) {
      return this._meta.hasTime;
    }
    return false;
  }

  get multiDay() {
    if ( this._meta.multiDay ) {
      return this._meta.multiDay;
    }
    return false;
  }

  get materialsLink() {
    if ( this._meta.materialsLink ) {
      return this._meta.materialsLink;
    }
    return '';
  }

  get speakers() {
    if ( this._meta.speakers ) {
      return this._meta.speakers;
    }
    return [];
  }

  get title() {
    if ( this._meta.title ) {
      return this._meta.title;
    }
    return '';
  }

  get time() {
    if ( this._meta.time ) {
      return this._meta.time;
    }
    return '';
  }

  get timezone() {
    if ( this._meta.timezone ) {
      return this._meta.timezone;
    }
    return '';
  }

  set meta( obj ) {
    this._meta = obj;
  }
}

export const getEventMeta = new EventMeta( eventParams );
