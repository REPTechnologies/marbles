require "spec_helper"

def route_path(path)
  route_to("home#index", :path => path)
end

describe HomeController do
  describe "routing" do

    it "routes to #index" do
      get("/").should route_to("home#index")
    end

    it "routes wildcards to #index" do
      get("/welcome").should route_path("welcome")
      get("/find").should route_path("find")
      get("/add").should route_path("add")
      get("/trends").should route_path("trends")
      get("/anything").should route_path("anything")
    end

  end
end
