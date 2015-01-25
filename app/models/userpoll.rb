class Userpoll < ActiveRecord::Base
  has_many :answers, :inverse_of => :userpoll
  belongs_to :user, :inverse_of => :userpolls
  belongs_to :poll, :inverse_of => :userpolls

  accepts_nested_attributes_for :answers
end
