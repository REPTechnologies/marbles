require "rails_helper"

describe V1::AnswersController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(get "/api/v1/answers").to route_to("v1/answers#index", :format => :json)
    end

  end
end
