class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many :events, :foreign_key => "attendee_id", :join_table => "attendees_events"
  has_and_belongs_to_many :organizations
  has_many :userpolls, :inverse_of => :user
end
