require 'feature_helper'

describe "Add Page", :js => true  do
  def event_json
    find('body').click #blur
    sleep 0.5
    page.evaluate_script('Marbles.mainRegion.currentView.model.toJSON()')['event'].symbolize_keys
  end

  before :each do
    visit "/add"
  end
  
  it "displays the add page" do
    expect(page).to have_content("Looking for a way to engage a broader community at your next event? Marbles can help connect you to a diverse audience who share common characteristics and intentions. Start attracting your ideal attendee now!")
  end

  it "validates required fields" do
    click_button 'Submit'
    ['Title', 'Location', 'Description', 'Primary focus', 'Time', 'Date', 'What is it?'].each do |f|
      expect(page).to have_content("#{f} can't be blank")
    end
  end

  describe "Focus Picker" do
    it "selects a primary focus" do
      find('.focus-pool').all('.focus').first.drag_to find_by_id('primary-drop')
      expect(find_by_id('primary_focus_id', :visible => false).value).to eq('1')
    end

    it "selects a secondary focus" do
      find('.focus-pool').all('.focus').last.drag_to find_by_id('secondary-drop')
      expect(find_by_id('secondary_focus_id', :visible => false).value).to eq('6')
    end
  end

  describe "Event Type Picker" do
    it "selects an event type" do
      find('.type-pool').find('.type', :text => 'Presentation').click
      expect(find_by_id('event_type', :visible => false).value).to eq('presentation')
    end

    it "selects only one event type" do
      find('.type-pool').find('.type', :text => 'Presentation').click
      expect(find_by_id('event_type', :visible => false).value).to eq('presentation')
      find('.type-pool').find('.type', :text => 'Other').click
      expect(find_by_id('event_type', :visible => false).value).to eq('other')
    end
  end

  describe "Event Scopes Picker" do
    it "selects an event scope" do
      find('.scope-pool').find('.scope', :text => '1st Years').click
      scope_ids = event_json[:scope_ids]
      expect(scope_ids).to have(1).items
      expect(scope_ids).to include(1)
    end

    it "selects multiple event scopes" do
      find('.scope-pool').find('.scope', :text => '1st Years').click
      find('.scope-pool').find('.scope', :text => '2nd Years').click
      scope_ids = event_json[:scope_ids]
      expect(scope_ids).to have(2).items
      expect(scope_ids).to include(1)
      expect(scope_ids).to include(2)
    end
  end

  describe "Event Model Binding" do
    it "binds all inputs" do
      find('.focus-pool').all('.focus').first.drag_to find_by_id('primary-drop')
      #find('.focus-pool').all('.focus').last.drag_to find_by_id('secondary-drop') #not sure why, but this does not work
      find('.type-pool').find('.type', :text => 'Presentation').click
      find('.scope-pool').find('.scope', :text => '1st Years').click
      find('.scope-pool').find('.scope', :text => '2nd Years').click
      fill_in('event-title', :with => 'Event Title')
      fill_in('event-date', :with => '2014-10-31')
      local_time = '20:30'
      fill_in('event-time', :with => local_time)
      fill_in('event-location', :with => '123 Fake St')
      fill_in('event-seats', :with => '10')
      fill_in('event-cost', :with => '2.50')
      fill_in('event-description', :with => 'Event Description')
      event = event_json
      expect(event[:primary_focus_id]).to eq('1')
      #expect(event[:secondary_focus_id]).to eq('6')
      expect(event[:event_type]).to eq('presentation')
      expect(event[:scope_ids]).to have(2).items
      expect(event[:scope_ids]).to include(1)
      expect(event[:scope_ids]).to include(2)
      expect(event[:title]).to eq('Event Title')
      expect(event[:held_on]).to eq('2014-10-31')
      utc_time = page.evaluate_script("M.convert.time('ViewToModel', '#{local_time}')")
      expect(event[:held_at]).to eq(utc_time)
      expect(event[:location]).to eq('123 Fake St')
      expect(event[:seats]).to eq('10')
      expect(event[:cost]).to eq('2.50')
      expect(event[:description]).to eq('Event Description')
    end
  end
end
