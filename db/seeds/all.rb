# This will be run during `rake db:seed` for all environments.
def all_path(file)
  File.open Rails.root.join('db', 'seeds', 'all', file)
end

def focus
  {
    :class => Focus,
    :source => all_path('focus.json')
  }
end

def scope
  {
    :class => Scope,
    :source => all_path('scope.json')
  }
end

def tag
  {
    :class => ActsAsTaggableOn::Tag,
    :source => all_path('tag.json')
  }
end

def seeds_all
  [focus, scope, tag]
end
