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
    return this._meta;
  }

  get date() {
    if ( this._meta.date ) {
      return this._meta.date;
    }
    return null;
  }

  get description() {
    if ( this._meta.description ) {
      return this._meta.description;
    }
    return null;
  }

  get duration() {
    if ( this._meta.duration ) {
      return this._meta.duration;
    }
    return null;
  }

  get endDate() {
    if ( this._meta.endDate ) {
      return this._meta.endDate;
    }
    return null;
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

  get title() {
    if ( this._meta.title ) {
      return this._meta.title;
    }
    return null;
  }

  get time() {
    if ( this._meta.time ) {
      return this._meta.time;
    }
    return null;
  }

  set meta( obj ) {
    this._meta = obj;
  }
}

export const getEventMeta = new EventMeta( eventParams );
