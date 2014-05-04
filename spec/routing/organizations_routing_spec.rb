require "spec_helper"

describe V1::OrganizationsController do
  describe "routing" do

    it "routes to #index" do
      expect(get "/api/v1/organizations").to route_to("v1/organizations#index", :format => :json)
    end

    it "routes to #new" do
      expect(get "/api/v1/organizations/new").to route_to("v1/organizations#new", :format => :json)
    end

    it "routes to #show" do
      expect(get "/api/v1/organizations/1").to route_to("v1/organizations#show", :id => "1", :format => :json)
    end

    it "routes to #edit" do
      expect(get "/api/v1/organizations/1/edit").to route_to("v1/organizations#edit", :id => "1", :format => :json)
    end

    it "routes to #create" do
      expect(post "/api/v1/organizations").to route_to("v1/organizations#create", :format => :json)
    end

    it "routes to #update" do
      expect(put "/api/v1/organizations/1").to route_to("v1/organizations#update", :id => "1", :format => :json)
    end

    it "routes to #destroy" do
      expect(delete "/api/v1/organizations/1").to route_to("v1/organizations#destroy", :id => "1", :format => :json)
    end

  end
end
