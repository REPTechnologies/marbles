class CreateAlphaInvites < ActiveRecord::Migration
  def change
    create_table :alpha_invites do |t|
      t.string :email

      t.timestamps
    end
  end
end
