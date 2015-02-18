class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many :events, :foreign_key => "attendee_id", :join_table => "attendees_events"
  has_and_belongs_to_many :organizations
  has_many :userpolls, :inverse_of => :user

##  before_validation :alpha_invited?

  private

    def alpha_invited?
      unless AlphaInvite.exists?(email: email)
        errors.add :email, "is not on our invite list"
      end
    end

end
