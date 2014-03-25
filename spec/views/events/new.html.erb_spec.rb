require 'spec_helper'

describe "events/new" do
  before(:each) do
    assign(:event, stub_model(Event,
      :title => "MyString",
      :organization => nil
    ).as_new_record)
  end

  pending "renders new event form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", events_path, "post" do
      assert_select "input#event_title[name=?]", "event[title]"
      assert_select "input#event_organization[name=?]", "event[organization]"
    end
  end
end
