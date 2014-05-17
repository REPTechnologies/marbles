require "spec_helper"

describe V1::PackagesController do
  describe "routing" do

    it "routes to #index" do
      expect(get "/api/v1/packages").to route_to("v1/packages#index", :format => :json)
    end

    it "routes to #show" do
      expect(get "/api/v1/packages/1").to route_to("v1/packages#show", :id => "1", :format => :json)
    end

    it "routes to #create" do
      expect(post "/api/v1/packages").to route_to("v1/packages#create", :format => :json)
    end

    it "routes to #update" do
      expect(put "/api/v1/packages/1").to route_to("v1/packages#update", :id => "1", :format => :json)
    end

    it "routes to #destroy" do
      expect(delete "/api/v1/packages/1").to route_to("v1/packages#destroy", :id => "1", :format => :json)
    end

  end
end
