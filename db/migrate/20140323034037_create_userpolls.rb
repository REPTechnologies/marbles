class CreateUserpolls < ActiveRecord::Migration
  def change
    create_table :userpolls do |t|
      t.belongs_to :poll, index: true
      t.belongs_to :answer, index: true
      t.timestamps
    end
  end
end
