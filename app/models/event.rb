class Event < ActiveRecord::Base
  enum :event_type => {:presentation => 1, :networking => 2, :socializing => 3, :discussion => 4, :other => 5}

  belongs_to :organization, :inverse_of => :events
  belongs_to :primary_focus, :class_name => "Focus", :foreign_key => "primary_focus_id"
  belongs_to :secondary_focus, :class_name => "Focus", :foreign_key => "secondary_focus_id"
  has_and_belongs_to_many :scopes
  has_and_belongs_to_many :attendees, :class_name => "User", :join_table => "attendees_events"
  has_one :picture, :inverse_of => :event
  acts_as_taggable
  
  accepts_nested_attributes_for :organization
  
  validates :title, :held_at, :held_on, :location, :description, :event_type, :primary_focus, presence: true
  validates :cost, numericality: true, allow_nil: true
  validates :seats, numericality: { only_integer: true }, allow_nil: true
  validates :event_type, inclusion: {
    in: Event.event_types.keys,
    message: "is not a valid event type"
  }
end
