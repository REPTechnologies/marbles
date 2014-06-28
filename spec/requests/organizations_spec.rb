require 'rails_helper'

describe "Organizations", :type => :request do
  describe "GET /api/v1/organizations" do
    it "responds with the events json" do
      get v1_organizations_path
      expect(response.status).to be(200)
    end
  end
end