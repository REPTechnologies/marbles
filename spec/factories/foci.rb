# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :focus, :aliases => [:primary_focus, :secondary_focus] do
    name "Focus Name"
    description "Focus Description"
  end
end
