class ChangeDatatypeOnTableFromStringToText < ActiveRecord::Migration
  def change
    change_column :foci, :description, :text, :limit => nil
  end
end
