object @question

attributes :id, :name, :description, :slider_min, :slider_max

child :primary_focus => :primary_focus do
  extends "foci/show"
end
