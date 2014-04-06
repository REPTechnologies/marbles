class AddUserRefToUserpolls < ActiveRecord::Migration
  def change
    add_reference :userpolls, :user, index: true
  end
end
