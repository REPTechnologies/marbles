class CreatePackages < ActiveRecord::Migration
  def change
    create_table :packages do |t|
      t.string :name
      t.decimal :cost
      t.boolean :trial
      t.boolean :negotiated
      t.datetime :renew_at
      t.boolean :user_selectable
      t.integer :billing_schedule, default: 0

      t.timestamps
    end
  end
end
