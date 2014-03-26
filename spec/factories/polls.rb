# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :poll do
    version 1
    name "MyString"
    description "MyString"
    organizationName ""
    questions ""
    isValid false
    creationDateTime "2014-03-22 12:34:38"
  end
end
