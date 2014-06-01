require 'feature_helper'

describe "Home" do
  describe "GET /" do
    it "displays the welcome page by default", :js => true do
      visit root_path
      expect(page).to have_content("Welcome Page")
    end

    it "displays the find page", :js => true do
      visit "/find"
      expect(page).to have_content("Explore")
    end

    it "displays the add page", :js => true do
      visit "/add"
      expect(page).to have_content("Primary Focus")
    end

    it "displays the trends page", :js => true do
      visit "/trends"
      expect(page).to have_content("Trends Page")
    end

  end
end
