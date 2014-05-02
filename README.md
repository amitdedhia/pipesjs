# pipesjs
=======

An organizational pattern and starter kit for Backbone+Marionette. The solution is backend agnostic.

## features

1. Event-based UI notification system using alertify
2. Well-defined page layout and controller
3. Loading view for page loads via spinjs
4. Bootstrap (it's pretty)

## client-side structure

### pages
These javascript files initialize/bootstrap your application.

### apps
This section defines the different segments of your application that a user would experience. A good alternative to "apps" would be "areas".

### modules
These are similar to apps, but do not define any routes.

### components
Similar to modules, but have a reduced surface area. Good examples of components would be validators, formatters, or extensions.

### models
A simple folder that contains all Backbone.Models and Collections.
Sub-folders: collections

### base
A container for all of the application's base objects that can be extended.
Sub-folders: models, views, layouts, and controllers

### shared
Similar to base. These scripts define cross-app reusable entities, but are not suitable to live in "base".
Sub-folders: views, controllers, layouts

### templates
HTML template files such as handlebars, mustache, or jade.

### vendor
All bower and other external libs live here.

## in-progress

1. Automated scaffolding (e.g. Yeoman)
2. Everything