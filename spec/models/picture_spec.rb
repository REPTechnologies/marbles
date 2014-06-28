require 'rails_helper'

describe Picture, :type => :model do
  it "has a valid factory" do
    expect(build(:picture)).to be_valid
  end
end
