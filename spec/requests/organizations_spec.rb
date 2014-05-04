require 'spec_helper'

describe "Organizations" do
  describe "GET /api/v1/organizations" do
    it "responds with the events json" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get v1_organizations_path
      response.status.should be(200)
    end
  end
end