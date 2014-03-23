# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :question do
    name "MyString"
    description "MyString"
    slidermin 1
    slidermax 1
    hasAllocation false
  end
end
