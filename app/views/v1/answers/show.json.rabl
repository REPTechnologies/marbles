object @answer

attributes :id, :slider, :created_at, :updated_at

child :question => :question do
  extends "questions/show"
end
