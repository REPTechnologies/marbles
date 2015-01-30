class AddSequenceToQuestion < ActiveRecord::Migration
  def change
    add_column :questions, :sequence, :integer
  end
end
