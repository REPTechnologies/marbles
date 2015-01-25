require 'rails_helper'

describe "Answers", :type => :request do
  describe "GET /api/v1/answers" do
    it "responds with the unauthorized error" do
      get v1_answers_path
      expect(response.status).to be(401)
    end
  end
end
