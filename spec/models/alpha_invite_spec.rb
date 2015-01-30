require 'rails_helper'

describe AlphaInvite, :type => :model do
  it "has a valid factory" do
    expect(build(:alpha_invite)).to be_valid
  end
end
