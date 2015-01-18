# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :poll do
    version 1
    name "MyString"
    description "MyString"
    active true
  end
end
