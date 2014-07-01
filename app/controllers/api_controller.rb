class ApiController < ApplicationController
  before_filter :require_login, :only => [:create, :update, :destroy]

  private
    def require_login
      unless user_signed_in?
        unauthorized "You must login before you can proceed."
      end
    end

    def unauthorized(message)
      respond_to do |format|
        format.json { render json: { :errors => [message] }, status: :unauthorized }
      end
    end
end
