class FixPollModels < ActiveRecord::Migration
  def change
    remove_column :polls, :question_id
    add_reference :questions, :poll, index: true

    remove_column :userpolls, :answer_id
    add_reference :answers, :userpoll, index: true
  end
end
