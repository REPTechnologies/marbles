require 'spec_helper'

describe "packages/new" do
  before(:each) do
    assign(:package, stub_model(Package,
      :name => "MyString",
      :cost => "9.99",
      :trial => false,
      :negotiated => false,
      :user_selectable => false,
      :billing_schedule => 1
    ).as_new_record)
  end

  it "renders new package form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", packages_path, "post" do
      assert_select "input#package_name[name=?]", "package[name]"
      assert_select "input#package_cost[name=?]", "package[cost]"
      assert_select "input#package_trial[name=?]", "package[trial]"
      assert_select "input#package_negotiated[name=?]", "package[negotiated]"
      assert_select "input#package_user_selectable[name=?]", "package[user_selectable]"
      assert_select "input#package_billing_schedule[name=?]", "package[billing_schedule]"
    end
  end
end
