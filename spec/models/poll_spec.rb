require 'rails_helper'

describe Poll, :type => :model do
  it "has a valid factory" do
    expect(build(:poll)).to be_valid
  end
end
