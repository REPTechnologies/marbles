class AddChangeToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :change, :integer
  end
end
