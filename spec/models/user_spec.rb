require 'rails_helper'

describe User, :type => :model do
  it "is valid with an invite" do
    expect(build(:user, email: "test5@email.com")).to be_valid
  end

  it "has an error without an invite" do
    expect(build(:user)).to have(1).error_on(:email)
  end
end
