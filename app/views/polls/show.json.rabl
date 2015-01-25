object @poll

attributes :id, :version, :name, :description

child :questions do
  extends "questions/show"
end
