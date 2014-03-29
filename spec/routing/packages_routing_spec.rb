require "spec_helper"

describe PackagesController do
  describe "routing" do

    it "routes to #index" do
      get("/api/packages").should route_to("packages#index")
    end

    it "routes to #new" do
      get("/api/packages/new").should route_to("packages#new")
    end

    it "routes to #show" do
      get("/api/packages/1").should route_to("packages#show", :id => "1")
    end

    it "routes to #edit" do
      get("/api/packages/1/edit").should route_to("packages#edit", :id => "1")
    end

    it "routes to #create" do
      post("/api/packages").should route_to("packages#create")
    end

    it "routes to #update" do
      put("/api/packages/1").should route_to("packages#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/api/packages/1").should route_to("packages#destroy", :id => "1")
    end

  end
end
