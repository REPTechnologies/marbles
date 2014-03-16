class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :name
      t.belongs_to :owner, index: true
      t.belongs_to :plan, index: true

      t.timestamps
    end
  end
end
