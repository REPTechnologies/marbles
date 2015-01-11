class RemoveHasAllocationFromQuestions < ActiveRecord::Migration
  def change
    remove_column :questions, :hasAllocation, :boolean
  end
end
