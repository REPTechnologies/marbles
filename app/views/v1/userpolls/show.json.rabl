object @userpoll

attributes :id, :poll_id, :created_at, :updated_at

child :answers => :answers do
  extends "v1/answers/index"
end
