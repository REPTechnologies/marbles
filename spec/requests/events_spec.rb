require 'spec_helper'

describe "Events" do
  describe "GET /api/v1/events" do
    it "responds with the events json" do
      get v1_events_path
      response.status.should be(200)
    end
  end
end