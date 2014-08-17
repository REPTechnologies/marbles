class RenameTableFocusToFoci < ActiveRecord::Migration
  def change
    rename_table :focus, :foci
  end
end
