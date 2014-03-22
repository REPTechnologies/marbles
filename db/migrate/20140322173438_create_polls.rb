class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.integer :version
      t.string :name
      t.string :description
      t.organization :organizationName
      t.question :questions
      t.boolean :isValid
      t.datetime :creationDateTime

      t.timestamps
    end
  end
end
