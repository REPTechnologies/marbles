class AddHeldOnToEvents < ActiveRecord::Migration
  def change
    add_column :events, :held_on, :date
    remove_column :events, :held_at, :datetime
    add_column :events, :held_at, :time
  end
end
