# This will be run during `rake db:seed` for all environments.

include Sprig::Helpers

def all_path(file)
  File.open Rails.root.join('db', 'seeds', 'all', file)
end

focus = {
  :class => Focus,
  :source => all_path('focus.json')
}

scope = {
  :class => Scope,
  :source => all_path('scope.json')
}

tag = {
  :class => ActsAsTaggableOn::Tag,
  :source => all_path('tag.json')
}

sprig [focus, scope, tag]
