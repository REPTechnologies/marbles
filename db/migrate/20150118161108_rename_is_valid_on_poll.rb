class RenameIsValidOnPoll < ActiveRecord::Migration
  def change
    rename_column :polls, :isValid, :active
  end
end
