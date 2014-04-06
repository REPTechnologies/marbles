class HomeController < ApplicationController
  def index
    gon.rabl
    @user = current_user
    gon.rabl "app/views/users/show.json.rabl", as: "current_user"
  end
end
