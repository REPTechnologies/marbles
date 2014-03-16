# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :focu, :class => 'Focus' do
    name "MyString"
    description "MyString"
  end
end
