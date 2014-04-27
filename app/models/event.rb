class Event < ActiveRecord::Base
  enum type: {:presentation => 1, :networking => 2, :socializing => 3, :discussion => 4, :other => 5}

  belongs_to :organization, :inverse_of => :events
  belongs_to :primary_focus, :class_name => "Focus", :foreign_key => "primary_focus_id"
  belongs_to :secondary_focus, :class_name => "Focus", :foreign_key => "secondary_focus_id"
  has_and_belongs_to_many :scopes
  has_and_belongs_to_many :attendees, :class_name => "User", :join_table => "attendees_events"
  acts_as_taggable
end
