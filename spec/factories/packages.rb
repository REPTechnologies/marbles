# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :package do
    name "MyString"
    cost "9.99"
    trial false
    negotiated false
    renew_at "2014-03-16 18:07:47"
    user_selectable false
    billing_schedule 1
  end
end
