class SessionsController < Devise::SessionsController
  respond_to :html, :json

  def auth_options
    { scope: resource_name, recall: "#{controller_path}#failure" }
  end

  def failure
    respond_to do |format|
      format.html { redirect_to new_user_session_path }
      format.json { render :json => { errors: ['Log In failed.'] }, :status => :unauthorized }
    end
  end
end
