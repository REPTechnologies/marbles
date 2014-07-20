require 'rails_helper'
require 'capybara/rails'
require 'capybara/poltergeist'

Capybara.javascript_driver = :poltergeist

def login(email, password='password')
  within('#auth-region') do
    find_button('Log In').trigger('click')
  end
  within('#log-in-modal') do
    fill_in('Email', :with => email)
    fill_in('Password', :with => password)
    click_button('Log In')
  end
end
