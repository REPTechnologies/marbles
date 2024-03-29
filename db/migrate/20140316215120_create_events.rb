class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.belongs_to :organization, index: true
      t.belongs_to :primary_focus, index: true
      t.belongs_to :secondary_focus, index: true
      t.integer :type, default: 0
      t.datetime :held_at
      t.string :location
      t.integer :seats
      t.decimal :cost

      t.timestamps
    end
  end
end
