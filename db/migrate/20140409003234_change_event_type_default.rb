class ChangeEventTypeDefault < ActiveRecord::Migration
  def change
    change_column_default :events, :type, nil
  end
end
