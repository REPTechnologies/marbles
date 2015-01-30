require 'rails_helper'

describe "Userpolls", :type => :request do
  describe "GET /api/v1/userpolls" do
    it "responds with the unauthorized error" do
      get v1_userpolls_path
      expect(response.status).to be(401)
    end
  end
end
