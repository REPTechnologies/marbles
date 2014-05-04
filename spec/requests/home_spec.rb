require 'spec_helper'

describe "Home" do
  describe "GET /" do
    it "displays the welcome page by default" do
      get root_path
      response.status.should be(200)
    end
    
    it "displays the welcome page" do
      get "/welcome"
      response.status.should be(200)
    end
    
    it "displays the find page" do
      get "/find"
      response.status.should be(200)
    end
    
    it "displays the add page" do
      get "/add"
      response.status.should be(200)
    end
    
    it "displays the trends page" do
      get "/trends"
      response.status.should be(200)
    end
    
  end
end
