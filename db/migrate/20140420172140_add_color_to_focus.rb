class AddColorToFocus < ActiveRecord::Migration
  def change
    add_column :focus, :color, :string
  end
end
