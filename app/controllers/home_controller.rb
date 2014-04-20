class HomeController < ApplicationController
  def index
    gon.rabl
    
    @user = current_user
    gon.rabl template: "app/views/users/show.json.rabl", as: "current_user"
    
    @foci = Focus.all
    gon.rabl template: "app/views/foci/index.json.rabl", as: "foci"
  end
end
