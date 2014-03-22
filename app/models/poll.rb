class Poll < ActiveRecord::Base
   has_many :questions, :inverse_of => :organization
   has_many :userpolls, :inverse_of => :organization
 
end
