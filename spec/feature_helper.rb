require 'rails_helper'
require 'capybara/rails'
require 'capybara/poltergeist'

Capybara.javascript_driver = :poltergeist

def login(email, password='password')
  path = current_path
  find_link('Log In').trigger('click')
  fill_in('Email', :with => email)
  fill_in('Password', :with => password)
  click_button('Log In')
  visit path
end
