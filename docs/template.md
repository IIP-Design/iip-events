# Override the Default Event Template

This plugin include an file in the `public` directory called `single-iip_events.php`. This file will instruct your site how to display the event information on the frontend.

To override this this default template, you simply need to add your own `single-iip_events.php` to your site's theme.

## Getting Event Data

If you are defining your own event post type display, you will almost certainly want to pull in the event data. This data is stored as a serialized array in the post meta field `_iip_event_meta` for each post.

To access it, get the post id and then use that id to get the relevant metadata. Since this metadata is serialized, you will need to use the `unserialize()` function to make it easy to manipulate. An example of how to do this is:

```php
$id = get_the_ID();
$event_data = unserialize( get_post_meta( $id, '_iip_event_meta', true ) );
```

## Add to Calendar Widget

The default template includes an add to calendar widget that allows users to save an event to their Google, Apple, or Outlook calendars. To add this to your own template, simply include the following empty div where you would like the widget to appear:

```html
<div class="iip-event-add-to-cal" id="iip-event-add-to-cal"></div>
```

The React code which displays this widget is enqueued in the frontend JS bundle and so will attach itself to any div with the id "iip-event-add-to-cal".