require "spec_helper"

describe V1::OrganizationsController do
  describe "routing" do

    it "routes to #index" do
      get("/api/v1/organizations").should route_to("v1/organizations#index")
    end

    it "routes to #new" do
      get("/api/v1/organizations/new").should route_to("v1/organizations#new")
    end

    it "routes to #show" do
      get("/api/v1/organizations/1").should route_to("v1/organizations#show", :id => "1")
    end

    it "routes to #edit" do
      get("/api/v1/organizations/1/edit").should route_to("v1/organizations#edit", :id => "1")
    end

    it "routes to #create" do
      post("/api/v1/organizations").should route_to("v1/organizations#create")
    end

    it "routes to #update" do
      put("/api/v1/organizations/1").should route_to("v1/organizations#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/api/v1/organizations/1").should route_to("v1/organizations#destroy", :id => "1")
    end

  end
end
