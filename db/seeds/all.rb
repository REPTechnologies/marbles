# This will be run during `rake db:seed` for all environments.

include Sprig::Helpers

def all_path(file)
  File.open Rails.root.join('db', 'seeds', 'all', file)
end

focus = {
  :class => Focus,
  :source => all_path('focus.json')
}

sprig [focus]
