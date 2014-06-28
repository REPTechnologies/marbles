require 'spec_helper'

describe "Packages", :type => :request do
  describe "GET /api/v1/packages" do
    it "responds with the events json" do
      get v1_packages_path
      expect(response.status).to be(200)
    end
  end
end
