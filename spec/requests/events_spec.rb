require 'rails_helper'

describe "Events", :type => :request do
  describe "GET /api/v1/events" do
    it "responds with the events json" do
      get v1_events_path
      expect(response.status).to be(200)
    end
  end
end