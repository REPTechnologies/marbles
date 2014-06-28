require 'rails_helper'

describe "Home" do
  describe "GET /" do
    it "displays the welcome page by default" do
      get root_path
      expect(response.status).to be(200)
    end
    
    it "displays the welcome page" do
      get "/welcome"
      expect(response.status).to be(200)
    end
    
    it "displays the find page" do
      get "/find"
      expect(response.status).to be(200)
    end
    
    it "displays the add page" do
      get "/add"
      expect(response.status).to be(200)
    end
    
    it "displays the trends page" do
      get "/trends"
      expect(response.status).to be(200)
    end
    
  end
end
