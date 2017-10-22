# Server
The server uses **rails 5.1.4** and **Ruby 2.4.1**.

## Installation
Before you dive into dependency management, first download and install `rvm`, then `rvm use 2.4.1`. After successful attempt, continue with:
```bash
cd server
gem install bundler
bundle install
```

## Database setup
Create user for app development (you have to install `PostgreSQL >= 9.6` before).
```bash
sudo su postgres
psql
create role sfi with createdb login password 'sfi';
```
Then you have to somehow migrate database to the current state. Use:
```bash
rake db:setup # for creating dev and test dbs
rake db:schema:load # for loading the state of database from schema.rb
```
**Note:** you could also go for `rake db:migrate`, however it is not oficially recommended in favor of loading database schema from `schema.rb` which is meant to be the one source of truth for your rails database.

## Recommended workflow
Add tests. If you are creating a model, remember to create a factory for it. If you are adding a controller, add request spec, **not** the controller one, since it is recommended by both Rails team and the RSpec core team to test behaviour through the full stack, including routing.

## Run on localhost
```bash
cd server
rails s
```

## Deployment
TBD