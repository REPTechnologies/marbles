json.array!(@packages) do |package|
  json.extract! package, :id, :name, :cost, :trial, :negotiated, :renew_at, :user_selectable, :billing_schedule
  json.url package_url(package, format: :json)
end
