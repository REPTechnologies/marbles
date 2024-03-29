require "rails_helper"

describe V1::EventsController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(get "/api/v1/events").to route_to("v1/events#index", :format => :json)
    end

    it "routes to #show" do
      expect(get "/api/v1/events/1").to route_to("v1/events#show", :id => "1", :format => :json)
    end

    it "routes to #create" do
      expect(post "/api/v1/events").to route_to("v1/events#create", :format => :json)
    end

    it "routes to #update" do
      expect(put "/api/v1/events/1").to route_to("v1/events#update", :id => "1", :format => :json)
    end

    it "routes to #destroy" do
      expect(delete "/api/v1/events/1").to route_to("v1/events#destroy", :id => "1", :format => :json)
    end

  end
end
