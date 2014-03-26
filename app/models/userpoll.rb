class Userpoll < ActiveRecord::Base
  has_many :answers, :inverse_of => :userpoll
  belongs_to :user, :inverse_of => :userpoll
  
end
