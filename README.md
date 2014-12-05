# mercs.io

## Installation

You will need bundler in order to install all the necessary dependencies.

    bundle install

## Running locally

Since it's built using jekyll we can use jekyll's server for development
purposes.

	bundle exec jekyll server --watch

This will run the server by default at `http://0.0.0.0:4000`

## Building and publishing

Since GitHub Pages onl supports a limited number of plugins and the ones we're
using are not on the list, we need to generate the static files manually and
publish them to the gh-pages branch. In order to do so we need to run:

	bundle exec rake
