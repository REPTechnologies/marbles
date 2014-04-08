require "spec_helper"

describe V1::EventsController do
  describe "routing" do

    it "routes to #index" do
      get("/api/v1/events").should route_to("v1/events#index")
    end

    it "routes to #new" do
      get("/api/v1/events/new").should route_to("v1/events#new")
    end

    it "routes to #show" do
      get("/api/v1/events/1").should route_to("v1/events#show", :id => "1")
    end

    it "routes to #edit" do
      get("/api/v1/events/1/edit").should route_to("v1/events#edit", :id => "1")
    end

    it "routes to #create" do
      post("/api/v1/events").should route_to("v1/events#create")
    end

    it "routes to #update" do
      put("/api/v1/events/1").should route_to("v1/events#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/api/v1/events/1").should route_to("v1/events#destroy", :id => "1")
    end

  end
end
