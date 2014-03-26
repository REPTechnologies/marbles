class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.integer :version
      t.string :name
      t.string :description
      t.belongs_to :organization, index: true
      t.belongs_to :question, index: true
      t.boolean :isValid
      t.datetime :creationDateTime

      t.timestamps
    end
  end
end
