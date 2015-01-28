# This will be run during `rake db:seed` in the :test environment.
def seeds_env
  [AlphaInvite, User, Organization, Event]
end
