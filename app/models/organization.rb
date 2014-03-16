class Organization < ActiveRecord::Base
  belongs_to :owner, :class_name => "User"
  has_many :events, :inverse_of => :organization
  has_and_belongs_to_many :users
end
