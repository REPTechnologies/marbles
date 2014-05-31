# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :event do
    title "Event Title"
    held_at "20:00"
    held_on "2014-10-31"
    location Faker::Address.street_address
    description Faker::Lorem.paragraph
    primary_focus
    secondary_focus
    type "presentation"
  end
end
