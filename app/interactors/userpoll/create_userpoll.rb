class Userpoll::CreateUserpoll
  include Interactor

  def setup
    userpoll_params[:user_id] = current_user_id
    prev_answers = find_previous_answers
    if prev_answers.nil? 
      answers_params.each do |answer|
        answer[:change] = answer[:slider] - 50 #TODO fix based on average of slider min/max
      end
    else
      prev_answers.each do |prev_answer|
        question_id = prev_answer.question.id
        answers_params.each do |answer|
          if answer[:question_id] == question_id
            answer[:change] = answer[:slider] - prev_answer.slider
          end
        end
      end
    end
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

    def answers_params
      userpoll_params[:answers_attributes]
    end

    def current_user_id
      context[:user].id
    end

    def find_previous_answers
      userpoll = Userpoll.includes(answers: {question: :primary_focus}).where(user_id: current_user_id, poll_id: userpoll_params[:poll_id]).order(:created_at).last
      userpoll.nil? ? nil : userpoll.answers
    end
end
