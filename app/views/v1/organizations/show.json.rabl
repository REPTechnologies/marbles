object @organization

attributes :id, :name, :event_ids, :owner_id, :user_ids, :description, :contact_info, :num_followers

node :upcoming_events do |organization|
  partial "v1/events/index", object: organization.upcoming_events
end

node :recent_events do |organization|
  partial "v1/events/index", object: organization.recent_events
end
