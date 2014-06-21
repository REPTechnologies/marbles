require 'spec_helper'

describe "Tags" do
  describe "GET /api/v1/tags" do
    it "responds with 400 if term parameter is missing" do
      get v1_tags_path
      expect(response.status).to be(400)
    end

    it "responds with the results json" do
      get v1_tags_path, :term => "em"
      expect(response.status).to be(200)
    end
  end
end
