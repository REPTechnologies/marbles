class Question < ActiveRecord::Base
  belongs_to :poll, :inverse_of => :questions
  has_many :answers, :inverse_of => :question
  belongs_to :primary_focus, :class_name => "Focus", :foreign_key => "primary_focus_id"
  has_and_belongs_to_many :secondary_focus, :class_name => "Focus", :foreign_key => "secondary_focus_id"
end
