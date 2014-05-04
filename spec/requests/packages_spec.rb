require 'spec_helper'

describe "Packages" do
  describe "GET /api/v1/packages" do
    it "responds with the events json" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get v1_packages_path
      expect(response.status).to be(200)
    end
  end
end
