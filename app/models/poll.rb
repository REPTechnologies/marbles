class Poll < ActiveRecord::Base
  has_many :questions, -> { order "sequence ASC" }, :inverse_of => :poll
  has_many :userpolls, :inverse_of => :poll
end
