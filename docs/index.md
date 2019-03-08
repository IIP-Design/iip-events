## Plugin Structure

```bash
├── iip-events.php # Imports classes and initiates plugin
├── package.json # Consolidated build scripts
│
├── admin # Plugin admin panel
│   │
│   ├── assets # Static image assets
│   ├── class-iip-events-admin.php # Enqueues and localizes admin JS/CSS
│   ├── class-iip-events-api.php # Events API endpoint
│   ├── class-iip-events-cpt.php # Event custom post type
│   ├── partials
│   │   ├── save-file.php # Handles AJAX requests to save files
│   │   └── save-metadata.php # Handles AJAX requests to save event post data
│   │
│   └── js
│       ├── config # Admin Webpack configs
│       ├── dist # Production & dev builds of admin JS and CSS bundle
│       ├── package.json # Admin build scripts and dependencies
│       ├── static # Static assets used by admin panel dev server
│       │
│       └── src # Admin panel React app
│           ├── App.jsx
│           ├── Components
│           │   ├── FileUploader.jsx
│           │   ├── Input.jsx
│           │   ├── RadioToggle.jsx
│           │   └── TimezoneDropdown.jsx
│           ├── Containers
│           │   ├── ConfigureForm.jsx
│           │   ├── DateSelector.jsx
│           │   └── TimeSelector.jsx
│           │
│           ├── index.js
│           ├── styles # Admin panel stylesheets
│           └── utils
│
├── docs # Plugin documentation
│
├── includes # Plugin hooks and actions
│   │
│   ├── class-iip-events-loader.php # Register all actions and filters for the plugin.
│   └── class-iip-events.php # Defines all hooks for the plugin
│
└── public # Plugin frontend 
    │
    ├── class-iip-events-public.php # Enqueues frontend JS/CSS, registers event post template
    ├── single-iip_event.php # Default event post template
    │
    └── js
        ├── config # Frontend Webpack configs
        ├── dist # Production & dev builds of frontend JS and CSS bundle
        ├── package.json # Frontend build scripts and dependencies
        └── src # Frontend React app
            ├── App.jsx # Add to calendar React component
            ├── index.js
            ├── styles # Frontend stylesheets
            └── utils
```