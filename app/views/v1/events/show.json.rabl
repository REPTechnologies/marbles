object @event

attributes :id, :title, :type, :location, :seats, :cost, :created_at, :updated_at, :description, :held_at, :held_on, :event_type

child :organization do
  attributes :id, :name
end

child :primary_focus => :primary_focus do
  extends "foci/show"
end

child :secondary_focus => :secondary_focus do
  extends "foci/show"
end

child :scopes => :scopes do
  extends "scopes/index"
end

child :tags => :tags do
  extends "v1/tags/index"
end

child :picture => :picture do
  extends "v1/pictures/show"
end
