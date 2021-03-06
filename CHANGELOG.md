# Change Log
**All notable changes to this project will be documented in this file.**

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3](https://github.com/IIP-Design/iip-events/tree/v1.1.3) - (2019-05-20)

**Changed:**
- Hardcoded path to plugin directory for placeholder images (dynamic path not working in JS files with domain-mapping)

## [1.1.2](https://github.com/IIP-Design/iip-events/tree/v1.1.2) - (2019-05-16)

**Added:**
- Eastern Daylight Time option to timezone dropdown

**Changed:**
- Set hover state on add to calendar button to pointer
- Tweak some styling on event post type front end

**Fixed:**
- Correct input sanitation for event data which was failing when certain characters were used

**Security**
- Updated vulnerable NPM dependencies

## [1.1.1](https://github.com/IIP-Design/iip-events/tree/v1.1.1) - (2019-03-13)

**Added:**
- Documentation on build scripts, the frontend template, and the plugin structure

**Fixed:**
- Pre-wrap white space on speaker bios so that line breaks are preserved

## [1.1.0](https://github.com/IIP-Design/iip-events/tree/v1.1.0) - (2019-03-08)

**Added:**
- File uploader that saves uploaded files to the media library and makes avialable as promo files
- To be announced and no date options for events
- Ability to add images profile images for speakers
- Directory for plugin documentation
- NPM script to automate plugin versioning
- PostCSS loader (for autoprefixing) and switched stylesheets to Sass

**Changed:**
- Removed language, organizer, and link fields in favor of generic customizable 'details' fields
- Updated event post type frontend to include promo materials grid
- Adjust event meta section so add to calendar widget drops below details on mobile

**Fixed:**
- Hide default featured image in event post type if present
- Add fallback if timezones not present

## [1.0.1](https://github.com/IIP-Design/iip-events/tree/v1.0.1) - (2019-02-21)

**Changed:**
- Timezone selector dropdown streamlined

## [1.0.0 - Initial Release](https://github.com/IIP-Design/iip-events/tree/v1.0.0) - (2019-02-14)

**Added:**
- Custom post type for events with title, description, datetime, promo image, speakers, contact info, and promotional info link input feilds
- Frontend event post type display with Add to Calendar button
- Rest API endpoint for events list and each individual event post