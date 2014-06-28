require 'rails_helper'

describe Focus, :type => :model do
  it "has a valid factory" do
    expect(build(:focus)).to be_valid
  end
end
