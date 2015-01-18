# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :question do
    name "MyString"
    description "MyString"
    slider_min 1
    slider_max 100
  end
end
