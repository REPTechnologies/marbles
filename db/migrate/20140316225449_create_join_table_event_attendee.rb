class CreateJoinTableEventAttendee < ActiveRecord::Migration
  def change
    create_join_table :events, :attendees do |t|
      # t.index [:event_id, :attendee_id]
      # t.index [:attendee_id, :event_id]
    end
  end
end
