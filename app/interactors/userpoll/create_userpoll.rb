class Userpoll::CreateUserpoll
  include Interactor

  def setup
    userpoll_params[:user_id] = current_user_id
  end

  def perform
    context[:userpoll] = Userpoll.new(userpoll_params)
    userpoll.save
    fail! errors: userpoll.errors unless userpoll.valid?
  end
  
  private

    def userpoll_params
      context[:userpoll_params]
    end
  
    def current_user_id
      context[:user].id
    end
end
