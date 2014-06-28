require "rails_helper"

def route_path(path)
  route_to("home#index", :path => path)
end

describe HomeController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(get "/").to route_to("home#index")
    end

    it "routes wildcards to #index" do
      expect(get "/welcome").to route_path("welcome")
      expect(get "/find").to route_path("find")
      expect(get "/add").to route_path("add")
      expect(get "/trends").to route_path("trends")
      expect(get "/anything").to route_path("anything")
    end

  end
end
