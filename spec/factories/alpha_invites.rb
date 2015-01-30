# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :alpha_invite do
    email Faker::Internet.email
  end
end
