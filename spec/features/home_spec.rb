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

    it "displays the trends page" do
      visit "/trends"
      expect(page).to have_content("Trends")
      expect(page).to have_content("Most Recent")
      expect(page).to have_content("Summary")
      expect(page).to have_content("Stats")
      expect(page).to have_content("Activity")
    end

  end
end
