# This will be run during `rake db:seed` in the :development environment.
def seeds_env
  [User, Organization, Event, AlphaInvite]
end
