class CreateJoinTableEventScope < ActiveRecord::Migration
  def change
    create_join_table :events, :scopes do |t|
      # t.index [:event_id, :scope_id]
      # t.index [:scope_id, :event_id]
    end
  end
end
