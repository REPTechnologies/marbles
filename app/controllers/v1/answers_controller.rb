class V1::AnswersController < AuthenticatedApiController
  respond_to :json

  # GET /answers
  # GET /answers.json
  def index
    @answers = eager_answer.joins(:userpoll).where(userpolls: {user_id: current_user.id})
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def eager_answer
      Answer.includes(:question)
    end
end
