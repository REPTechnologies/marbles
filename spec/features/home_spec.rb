require 'feature_helper'

describe "Marbles", :type => :feature, :js => true do
  describe "Marionette Routing" do
    it "displays the welcome page by default" do
      visit root_path
      expect(page).to have_content("Welcome Page")
    end

    it "displays the find page" do
      visit "/find"
      expect(page).to have_content("Explore")
    end

    it "displays the add page" do
      visit "/add"
      expect(page).to have_content("Primary Focus")
    end

    it "displays the poll page" do
      visit "/poll"
      expect(page).to have_content("Previous")
      expect(page).to have_content("Next")
    end

    it "displays the login page if unathenticated on the trends page" do
      visit "/trends"
      expect(page).to have_content("Log In")
      expect(page).to have_content("Remember me")
      expect(page).to have_content("Sign up")
      expect(page).to have_content("Forgot your password?")
    end

    it "displays the mission page" do
      visit "/mission"
      expect(page).to have_content("Mission Page")
    end

    it "displays the add page" do
      visit "/help"
      expect(page).to have_content("Help Page")
    end

    it "displays the add page" do
      visit "/contact"
      expect(page).to have_content("Contact Page")
    end

  end
end
