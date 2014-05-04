require "spec_helper"

describe V1::PackagesController do
  describe "routing" do

    it "routes to #index" do
      get("/api/v1/packages").should route_to("v1/packages#index", :format => :json)
    end

    it "routes to #new" do
      get("/api/v1/packages/new").should route_to("v1/packages#new", :format => :json)
    end

    it "routes to #show" do
      get("/api/v1/packages/1").should route_to("v1/packages#show", :id => "1", :format => :json)
    end

    it "routes to #edit" do
      get("/api/v1/packages/1/edit").should route_to("v1/packages#edit", :id => "1", :format => :json)
    end

    it "routes to #create" do
      post("/api/v1/packages").should route_to("v1/packages#create", :format => :json)
    end

    it "routes to #update" do
      put("/api/v1/packages/1").should route_to("v1/packages#update", :id => "1", :format => :json)
    end

    it "routes to #destroy" do
      delete("/api/v1/packages/1").should route_to("v1/packages#destroy", :id => "1", :format => :json)
    end

  end
end
