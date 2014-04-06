attributes :id, :email, :reset_password_sent_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at, :created_at, :updated_at

child :events do
  attributes :id, :title
end

child :organizations do
  attributes :id, :name
end

child :userpolls do
  attributes :id, :poll_id
end
