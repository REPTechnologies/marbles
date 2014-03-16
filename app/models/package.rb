class Package < ActiveRecord::Base
  has_many :organizations, :inverse_of => :plan
end
