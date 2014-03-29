class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :name
      t.string :description
      t.integer :slidermin
      t.integer :slidermax
      t.boolean :hasAllocation
      t.belongs_to :primary_focus, index: true
     
      

      t.timestamps
    end
  end
end
