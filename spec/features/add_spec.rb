require 'feature_helper'

describe "Add Page", :js => true  do
  before :each do
    visit "/add"
  end
  
  it "displays the add page" do
    expect(page).to have_content("Looking for a way to engage a broader community at your next event? Marbles can help connect you to a diverse audience who share common characteristics and intentions. Start attracting your ideal attendee now!")
  end

  it "validates required fields" do
    click_button "Submit"
    ['Title', 'Location', 'Description', 'Primary focus', 'Time', 'Date', 'What is it?'].each do |f|
      expect(page).to have_content("#{f} can't be blank")
    end
  end

  describe "Focus Picker" do
    it "selects a primary focus" do
      primary_drop = find_by_id('primary-drop')
      primary_input = find_by_id('primary_focus_id', :visible => false)
      focus = find('.focus-pool').all('.focus').first
      focus.drag_to(primary_drop)
      expect(primary_input.value).to eq('1')
    end
    
    it "selects a secondary focus" do
      secondary_drop = find_by_id('secondary-drop')
      secondary_input = find_by_id('secondary_focus_id', :visible => false)
      focus = find('.focus-pool').all('.focus').last
      focus.drag_to(secondary_drop)
      expect(secondary_input.value).to eq('6')
    end
  end
end
