object @answer

attributes :id, :userpoll_id
attributes slider: :score
attributes :change, :created_at, :updated_at


child :question => :question do
  extends "questions/show"
end
