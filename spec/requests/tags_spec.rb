require 'spec_helper'

describe "Tags" do
  describe "GET /api/v1/tags" do
    it "responds with 40o if term parameter is missing" do
      get v1_tags_path
      response.status.should be(400)
    end

    it "responds with the results json" do
      get v1_tags_path, :term => "em"
      response.status.should be(200)
    end
  end
end
