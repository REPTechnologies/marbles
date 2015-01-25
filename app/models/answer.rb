class Answer < ActiveRecord::Base
  belongs_to :question, :inverse_of => :answers
  belongs_to :userpoll, :inverse_of => :answers

  validates :slider, numericality: true
end
