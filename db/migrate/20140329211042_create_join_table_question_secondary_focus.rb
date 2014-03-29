class CreateJoinTableQuestionSecondaryFocus < ActiveRecord::Migration
  def change
    create_join_table :questions, :secondary_focus do |t|
      # t.index [:question_id, :secondary_focu_id]
      # t.index [:secondary_focu_id, :question_id]
    end
  end
end
