class V1::UserpollsController < AuthenticatedApiController
  respond_to :json
  before_action :set_userpoll, only: :show

  # GET /userpolls
  # GET /userpolls.json
  def index
    @userpolls = eager_userpoll.where(user_id: current_user.id)
  end

  # GET /userpolls/1
  # GET /userpolls/1.json
  def show
  end

  # POST /userpolls
  # POST /userpolls.json
  def create
    result = Userpoll::CreateUserpoll.perform(userpoll_context)

    respond_to do |format|
      if result.success?
        @userpoll = result.userpoll
        format.json { render action: 'show', status: :created }
      else
        format.json { render json: { :errors => result.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_userpoll
      @userpoll = eager_userpoll.where(id: params[:id], user_id: current_user.id)
    end

    def eager_userpoll
      Userpoll.includes(:answers)
    end

    def userpoll_context
      {:userpoll_params => userpoll_params, :user => current_user}
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def userpoll_params
      params.require(:userpoll).permit(:poll_id, {:answers_attributes => [:slider, :question_id]})
    end
end
