require 'rails_helper'

describe Question, :type => :model do
  it "has a valid factory" do
    expect(build(:question)).to be_valid
  end
end
