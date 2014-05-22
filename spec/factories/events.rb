# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :event do
    title "MyString"
    held_at "2014-10-31T20:00"
    location Faker::Address.street_address
    description Faker::Lorem.paragraph
    primary_focus_id 1
    type "presentation"
  end
end
