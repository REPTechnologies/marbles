class Poll < ActiveRecord::Base
   has_many :questions, :inverse_of => :poll
   has_many :userpolls, :inverse_of => :poll
end
