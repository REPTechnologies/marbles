class AddEventToPicture < ActiveRecord::Migration
  def change
    add_reference :pictures, :event, index: true
  end
end
