class Event < ActiveRecord::Base
  belongs_to :organization, :inverse_of => :events
  belongs_to :primary_focus, :class_name => "Focus", :foreign_key => "primary_focus_id"
  belongs_to :secondary_focus, :class_name => "Focus", :foreign_key => "secondary_focus_id"
  enum type: [ :presentation, :networking, :socializing, :discussion, :other ]

end
