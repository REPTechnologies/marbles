require "rails_helper"

describe V1::UserpollsController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(get "/api/v1/userpolls").to route_to("v1/userpolls#index", :format => :json)
    end

    it "routes to #show" do
      expect(get "/api/v1/userpolls/1").to route_to("v1/userpolls#show", :id => "1", :format => :json)
    end

    it "routes to #create" do
      expect(post "/api/v1/userpolls").to route_to("v1/userpolls#create", :format => :json)
    end

  end
end
